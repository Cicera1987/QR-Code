"use client";

import useTheme from "../../hooks/useTheme"
import {useForm} from "react-hook-form"

interface ContactProps{
    name: String;
    phone: String;
    description: string
}

export default function Contact(){
    //Usando react-hook-form para criar o formulario e validações | quanto tiver a Api usar zod antes de enviar para o backend
    const { register, handleSubmit, formState: { errors }, reset } = useForm < ContactProps > ();

    const { darkMode } = useTheme()
    const onSubmit = (data: ContactProps) => {
        console.log(data);
        localStorage.setItem('contactForm', JSON.stringify(data));
        alert('Feedback enviado com sucesso!');
        reset({
            name: "",
            phone: "",
            description: ""
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div
                className={`container min-h-screen flex flex-col justify-center items-center py-10 ${darkMode ? "bg-dark-background text-white" : "bg-background text-gray-900"
                    }`}
            >
                <h2 className="text-3xl font-bold text-primary mb-4">Entre em contato</h2>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    className="p-3 w-3/4 md:w-1/2 border border-gray-400 rounded-lg mb-4"
                    {...register("name", { required: "Nome é obrigatório" })}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                <input
                    type="text"
                    placeholder="Digite o telefone"
                    className="p-3 w-3/4 md:w-1/2 border border-gray-400 rounded-lg mb-4"
                    {...register("phone", {
                        required: "Telefone é obrigatório",
                        pattern: { value: /^[0-9]{10,11}$/, message: "Telefone inválido" }
                    })}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                <textarea
                    placeholder="Digite seu feedback"
                    className="p-3 w-3/4 md:w-1/2 border border-gray-400 rounded-lg mb-4"
                    {...register("description", { required: "Feedback é obrigatório" })}
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                <button
                    type="submit"
                    className="bg-blue-500 w-3/4 md:w-1/2 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Enviar
                </button>
            </div>
        </form>
    );
}