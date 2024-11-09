// src/components/ContactPage.tsx
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";

import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ContactMessage } from "./contact.types";

const ContactUs: React.FC = () => {
  // Sample data - replace with your actual data fetching logic
  const [messages, setMessages] = useState<ContactMessage[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      subject: "General Inquiry",
      message: "Hello, I have a question about your services.",
      createdAt: "2024-11-09T10:00:00Z",
      status: "pending",
    },
    // Add more sample messages as needed
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(
    null
  );
  const [replyMessage, setReplyMessage] = useState("");

  const handleReply = (message: ContactMessage) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const handleSendReply = async () => {
    if (!selectedMessage) return;

    try {
      // Add your API call here to send the reply
      // await sendReply(selectedMessage.id, replyMessage);

      // Update the message status in the local state
      setMessages(
        messages.map((msg) =>
          msg.id === selectedMessage.id
            ? { ...msg, status: "replied" as const }
            : msg
        )
      );

      setIsModalOpen(false);
      setReplyMessage("");
      setSelectedMessage(null);
    } catch (error) {
      console.error("Error sending reply:", error);
      // Add error handling here
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id}>
                <TableCell>
                  {format(new Date(message.createdAt), "MMM dd, yyyy")}
                </TableCell>
                <TableCell>{message.name}</TableCell>
                <TableCell>{message.email}</TableCell>
                <TableCell>{message.subject}</TableCell>
                <TableCell className="max-w-xs truncate">
                  {message.message}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      message.status === "replied" ? "default" : "secondary"
                    }
                  >
                    {message.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleReply(message)}
                    disabled={message.status === "replied"}
                  >
                    Reply
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Reply to {selectedMessage?.name}</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <p className="text-sm font-medium">Original Message:</p>
              <p className="text-sm text-gray-500">
                {selectedMessage?.message}
              </p>
            </div>

            <div className="grid gap-2">
              <label htmlFor="reply" className="text-sm font-medium">
                Your Reply:
              </label>
              <Textarea
                id="reply"
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                rows={4}
                placeholder="Type your reply here..."
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSendReply} disabled={!replyMessage.trim()}>
              Send Reply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactUs;
