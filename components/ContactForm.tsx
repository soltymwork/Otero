'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Meno musí mať aspoň 2 znaky'),
  email: z.string().email('Neplatná emailová adresa'),
  message: z.string().min(10, 'Správa musí mať aspoň 10 znakov'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulácia odoslania
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="w-full max-w-xl p-8 bg-neutral-50 shadow-sm border border-neutral-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-widest mb-2 text-neutral-900">Máte otázky?</h2>
        <p className="text-sm text-neutral-500 font-light">Vyplňte formulár a my sa vám ozveme čo najskôr.</p>
      </div>

      {success && (
        <div className="mb-6 p-4 bg-black text-white text-sm tracking-wider text-center">
          Správa bola úspešne odoslaná. Ďakujeme!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-2">Meno</label>
          <input
            {...register('name')}
            id="name"
            className="w-full border-b border-neutral-300 bg-transparent py-3 focus:outline-none focus:border-black transition-colors"
            placeholder="Vaše meno"
          />
          {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-2">Email</label>
          <input
            {...register('email')}
            id="email"
            type="email"
            className="w-full border-b border-neutral-300 bg-transparent py-3 focus:outline-none focus:border-black transition-colors"
            placeholder="vas@email.sk"
          />
          {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-2">Správa</label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            className="w-full border-b border-neutral-300 bg-transparent py-3 focus:outline-none focus:border-black transition-colors resize-none"
            placeholder="Ako vám môžeme pomôcť?"
          />
          {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-4 px-8 uppercase tracking-widest text-sm font-bold hover:bg-neutral-800 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Odosiela sa...' : 'Odoslať'}
        </button>
      </form>
    </div>
  );
}
