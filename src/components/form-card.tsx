// src/components/CardWithForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { mailSchema } from "../schemas/mailSchema";
import { useToast } from "../hooks/use-toast";
import { Textarea } from "./ui/textarea";
type MailFormData = z.infer<typeof mailSchema>;

export function CardWithForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MailFormData>({
    resolver: zodResolver(mailSchema),
  });

  const { toast } = useToast();

  const onSubmit = ({ name }: MailFormData) => {
    toast({
      title: "E-mail Validado!",
      description: `Olá, ${name}. Seu e-mail foi enviado com sucesso!`,
      variant: "success",
      duration: 3000,
    });
    reset();
  };

  return (
    <Card className="mx-auto w-full max-w-md rounded-sm p-4 shadow-sm shadow-zinc-800 sm:p-6 lg:p-8">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Formulário de Pesquisa
        </CardTitle>
        <CardDescription className="text-gray-600">
          Qual sua satisfação com nossa empresa?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid gap-4">
            <div className="flex flex-col">
              <Label
                htmlFor="name"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Nome Completo
              </Label>
              <Input
                id="name"
                placeholder="João Bobo..."
                {...register("name")}
                className={`mt-1 rounded-md border p-2 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {errors.name && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <Label
                htmlFor="email"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="joao@teste.com.br"
                {...register("email")}
                className={`mt-1 rounded-md border p-2 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {errors.email && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <Label
                htmlFor="phone"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Telefone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 91234-5678"
                {...register("phone")}
                className={`mt-1 rounded-md border p-2 focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {errors.phone && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <Label
                htmlFor="message"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Mensagem
              </Label>
              <Textarea
                id="message"
                placeholder="Sua mensagem..."
                {...register("message")}
                className={`mt-1 rounded-md border p-2 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {errors.message && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </span>
              )}
            </div>
          </div>

          <CardFooter className="mt-6 flex flex-col justify-between sm:flex-row">
            <Button
              type="button"
              variant="outline"
              onClick={() => reset()}
              className="mb-4 w-full sm:mb-0 sm:w-auto"
            >
              Cancelar
            </Button>
            <Button type="submit" className="w-full sm:w-auto">
              Enviar
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
