"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function AddUserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const queryClient = useQueryClient();

    const addUserMutation = useMutation({
        mutationFn: async (newUser: { name: string; email: string }) => {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error("Failed to add user");
            }

            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addUserMutation.mutate({ name, email });
        setName("");
        setEmail("");
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add New User (useMutation Example)</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <Button type="submit" disabled={addUserMutation.isPending}>
                        {addUserMutation.isPending ? "Adding..." : "Add User"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default AddUserForm;
