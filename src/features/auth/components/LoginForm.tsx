import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { z } from "zod";
import { loginWithEmailAndPassword } from "../api/login";
import { axios } from "@/lib/axios";

const formSchema = z.object({
    email: z.string().min(1, "Email is required"),
    password: z.string().min(1, "Password is required")
});

function LoginForm() {
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "", password: ""
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        await loginWithEmailAndPassword(values);
        navigate('/');
    }

    // function go() {
    //     axios.get('http://localhost:8080/posts')
    //     useN
    // }
    return (
        <>
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Login To Your Account
                </h1>
            </div>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-2"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="name@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full" type="submit">Log In</Button>
                </form>
            </Form>
            

            <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <NavLink
                    to="/terms"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Terms of Service
                </NavLink>{" "}
                and{" "}
                <NavLink
                    to="/privacy"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Privacy Policy
                </NavLink>
                .
            </p>

            <Button>Check </Button>
        </>
    );
}

export default LoginForm;
