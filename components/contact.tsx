"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
// import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  contactPreference: z.enum(["justin", "grufix"], {
    required_error: "Please select who you'd like to contact.",
  }),
});

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  // const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      contactPreference: "justin",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setAlertMessage(null); // Clear any existing alert
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setAlertMessage({
        type: "success",
        message:
          "Message sent successfully! Thank you for reaching out. We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "There was a problem sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="" id="contact">
      <div className="mx-2 sm:mx-auto max-w-6xl">
        <div className="container mx-auto">
          <div className="relative rounded-3xl ring-inset p-4 sm:p-6 lg:p-8 ring-black/5 ring-1 overflow-hidden bg-gradient-to-br from-[#fed4f4]/10 to-[#fef3d4]/20 group">
            {/* First blur - top right (orange) */}
            <div
              className="absolute -top-4 -right-32 w-64 h-64 rounded-full opacity-80 blur-[130px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,165,0,0.7) 0%, rgba(255,140,0,0.5) 100%)",
              }}
            />
            {/* First blur - bottom middle (pink) */}
            <div
              className="absolute -bottom-1/4 right-1/4 w-96 h-64 rounded-full opacity-80 blur-[130px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(236,130,177,0.7) 0%, rgba(234,82,149,0.5) 100%)",
              }}
            />
            {/* Second blur - bottom left (yellow) */}
            <div
              className="absolute -bottom-3 left-0 transform -translate-x-1/2 w-96 h-64 rounded-full opacity-80 blur-[130px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,215,0,0.7) 0%, rgba(255,235,59,0.5) 100%)",
              }}
            />

            <div className="relative z-10">
              {alertMessage && (
                <div
                  className={`p-4 mb-4 rounded-md flex justify-between items-center ${
                    alertMessage.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <span>{alertMessage.message}</span>
                  <button
                    onClick={() => setAlertMessage(null)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Close alert"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <div className="flex gap-8 flex-col sm:flex-row">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="flex-grow">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="flex-grow">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your.email@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="What would you like to discuss?"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contactPreference"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>
                            How would you like to contact me?
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <div className="flex items-center space-x-3">
                                <RadioGroupItem value="justin" id="justin" />
                                <Label htmlFor="justin">Personal mail</Label>
                              </div>
                              <div className="flex items-center space-x-3">
                                <RadioGroupItem value="grufix" id="grufix" />
                                <Label htmlFor="grufix">Through Grufix</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
