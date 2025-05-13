/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: LoginFormInputs) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Logged In", { id: toastId, duration: 1000 });
      router.push("/");
    } catch (err) {
      toast.error("Invalid credentials", { id: toastId, duration: 1000 });
    }
  };

  const setAdminValues = () => {
    setValue("email", "makya@gmail.com");
    setValue("password", "makya");
  };

  const setCustomerValues = () => {
    setValue("email", "customer@gmail.com");
    setValue("password", "customer123");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <Link href="/" className="mb-8">
        <h3 className="text-3xl font-bold text-gray-700">
          <span className="text-[#FF6B9D]">Makeup</span>Store
        </h3>
      </Link>

      <div className="w-full max-w-md p-8 space-y-6 bg-pink-50 shadow-lg rounded-2xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-pink-600">Welcome Back!</h2>
          <p className="text-sm text-pink-500 mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" autoComplete="off">
          {/* Hidden anti-autofill fields */}
          <input type="text" name="prevent_autofill" className="hidden" autoComplete="off" />
          <input type="password" name="password_fake" className="hidden" autoComplete="off" />

          <div className="space-y-2">
            <Label htmlFor="email" className="text-pink-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              autoComplete="new-email"
              className="bg-white border-pink-200 focus:border-pink-400"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-pink-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              className="bg-white border-pink-200 focus:border-pink-400"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 text-pink-600 border-pink-300 rounded focus:ring-pink-500"
              />
              <span className="text-sm text-pink-600">Remember me</span>
            </label>
            <Link href="#" className="text-sm text-pink-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-pink-400 hover:bg-pink-500 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

        {/* Default Account Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            onClick={setAdminValues}
            className="text-sm px-4 py-2 bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-200"
          >
            Admin Login
          </Button>
          <Button
            variant="outline"
            onClick={setCustomerValues}
            className="text-sm px-4 py-2 bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-200"
          >
            Customer Login
          </Button>
        </div>

        <p className="text-sm text-center text-pink-600">
          Don't have an account?{" "}
          <Link href="/register" className="font-medium text-pink-700 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}