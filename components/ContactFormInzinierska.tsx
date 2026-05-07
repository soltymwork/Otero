'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

const formSchema = z.object({
  name:    z.string().min(2, 'Meno musí mať aspoň 2 znaky'),
  phone:   z.string().min(9, 'Zadajte platné telefónne číslo'),
  email:   z.string().email('Neplatná emailová adresa'),
  service: z.string().min(1, 'Vyberte službu'),
  message: z.string().min(5, 'Správa musí mať aspoň 5 znakov'),
});

type FormData = z.infer<typeof formSchema>;

const services = [
  'Projektová dokumentácia',
  'Inžinierska činnosť',
  'Legalizácia stavby',
  'Ohlásenie drobnej stavby',
  'Iné',
];

export default function ContactFormInzinierska() {
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 5000);
  };

  const inputClass = "w-full border-b border-white/20 bg-transparent py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors";
  const labelClass = "block text-xs font-semibold tracking-widest uppercase text-white/50 mb-2";

  return (
    <div className="w-full max-w-xl">
      {success && (
        <div className="mb-6 p-4 bg-white text-black text-sm tracking-wider text-center">
          Dopyt bol úspešne odoslaný. Ďakujeme!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClass}>Meno a priezvisko</label>
            <input {...register('name')} id="name" className={inputClass} placeholder="Ján Novák" />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Telefón</label>
            <input {...register('phone')} id="phone" type="tel" className={inputClass} placeholder="+421 9XX XXX XXX" />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input {...register('email')} id="email" type="email" className={inputClass} placeholder="vas@email.sk" />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>O akú službu máte záujem?</label>
          <select
            {...register('service')}
            id="service"
            className="w-full border-b border-white/20 bg-transparent py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled className="bg-black text-white/50">Vyberte službu...</option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-black text-white">{s}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>Správa</label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            className="w-full border-b border-white/20 bg-transparent py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors resize-none"
            placeholder="Opíšte váš stavebný zámer..."
          />
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full border border-white text-white py-4 px-8 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Odosiela sa...' : 'Odoslať dopyt'}
        </button>
      </form>
    </div>
  );
}
