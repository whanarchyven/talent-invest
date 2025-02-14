'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { createTalent } from '@/shared/api/talents/createTalent';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Имя должно содержать не менее 2 символов',
  }),
  country: z.string().min(1, {
    message: 'Пожалуйста, выберите страну',
  }),
  job: z.string().min(2, {
    message: 'Укажите вашу работу',
  }),
  education: z.string().min(2, {
    message: 'Укажите ваше образование',
  }),
  email: z.string().email({
    message: 'Неверный формат email',
  }),
  phone: z.string().min(10, {
    message: 'Номер телефона должен содержать не менее 10 цифр',
  }),
  age: z
    .number()
    .min(18, {
      message: 'Вам должно быть не менее 18 лет',
    })
    .max(120, {
      message: 'Пожалуйста, введите корректный возраст',
    }),
  avatar: z.instanceof(File),
});

export function TalentRegistrationForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      country: '',
      job: '',
      education: '',
      email: '',
      phone: '',
      age: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    // const formData = new FormData();
    // Object.entries(values).forEach(([key, value]) => {
    //   formData.append(key, value);
    // });

    const data = await createTalent({ ...values, age: Number(values.age) });
    setIsLoading(false);
    console.log(data);
    if ('error' in data) {
      toast.error(
        `Ошибка: ${data.error.status as string} - ${JSON.stringify(data.error.value)}`
      );
    } else {
      toast.success('Данные успешно отправлены');
      router.push('/');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input placeholder="Иван Иванов" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Страна</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите страну" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="russia">Россия</SelectItem>
                  <SelectItem value="usa">США</SelectItem>
                  <SelectItem value="china">Китай</SelectItem>
                  <SelectItem value="germany">Германия</SelectItem>
                  <SelectItem value="japan">Япония</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="job"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Работа</FormLabel>
              <FormControl>
                <Input placeholder="Разработчик" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="education"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Образование</FormLabel>
              <FormControl>
                <Input placeholder="Высшее" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="example@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Телефон</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+7 (999) 123-45-67" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Возраст</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="avatar"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Аватарка</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      field.onChange(e.target.files[0]);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Отправка...' : 'Зарегистрироваться'}
        </Button>
      </form>
    </Form>
  );
}
