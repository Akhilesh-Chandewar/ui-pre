"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { createContact } from "@/actions";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");

    async function onSubmit(formData: FormData) {
        setIsSubmitting(true);
        setMessage("");

        const result = await createContact(formData);

        if (result.success) {
            setMessage("Message sent successfully");
            setIsSubmitting(false);
            (document.getElementById("contact-form") as HTMLFormElement).reset();
        } else {
            setMessage(result.message);
            setIsSubmitting(false);
        }
    }
    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
                <form id="contact-form" action={onSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" type="text" required disabled={isSubmitting} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" required disabled={isSubmitting} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" name="subject" type="text" required disabled={isSubmitting} />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" required disabled={isSubmitting} className="min-h-30" />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full">
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    {message && (
                        <div
                            className={`rounded-md border px-4 py-2 text-sm ${message.toLowerCase().includes("success")
                                ? "border-green-200 bg-green-50 text-green-700"
                                : "border-red-200 bg-red-50 text-red-700"
                                }`}
                        >
                            {message}
                        </div>
                    )}
                </form>
            </CardContent>
        </Card>
    )
}

export default ContactForm