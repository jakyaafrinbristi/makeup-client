/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  address: string;
  password: string;
  image: string;
};

export default function Register() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const onSubmit = async (data: FormValues) => {
    const toastId = toast.loading("Registering...");

    try {
      const userInfo = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address,
        password: data.password,
        image: data.image || "",
      };

      await registerUser(userInfo).unwrap();
      toast.success("Registered Successfully", { id: toastId, duration: 1000 });
      router.push("/loginPage");
    } catch (err) {
      toast.error("Register Failed", { id: toastId, duration: 1000 });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <form
      
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg p-8 space-y-6 bg-pink-50 shadow-lg rounded-lg"
        autoComplete="off"
      >
        {/* Hidden fields to prevent autocomplete */}
        <input type="text" name="preventAutofill1" className="hidden" autoComplete="off" />
        <input type="password" name="preventAutofill2" className="hidden" autoComplete="off" />

        <h1 className="text-2xl font-semibold text-center text-pink-600">Register</h1>

        <div className="space-y-2">
          <Label htmlFor="name" className="text-pink-700">Name:</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="bg-white border-pink-200 focus:border-pink-400"
            autoComplete="new-name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-pink-700">Phone:</Label>
          <Input
            id="phone"
            type="text"
            placeholder="Enter your phone"
            className="bg-white border-pink-200 focus:border-pink-400"
            autoComplete="new-phone"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-pink-700">Email:</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="bg-white border-pink-200 focus:border-pink-400"
            autoComplete="new-email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address" className="text-pink-700">Address:</Label>
          <Input
            id="address"
            type="text"
            placeholder="Enter your address"
            className="bg-white border-pink-200 focus:border-pink-400"
            autoComplete="new-address"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-pink-700">Password:</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="bg-white border-pink-200 focus:border-pink-400"
            autoComplete="new-password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="image" className="text-pink-700">Profile Image URL:</Label>
          <Input
            id="image"
            type="text"
            placeholder="Enter your image URL"
            className="bg-white border-pink-200 focus:border-pink-400"
            autoComplete="off"
            {...register("image")}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-pink-400 hover:bg-pink-500 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </Button>
      </form>
    </div>
  );
}