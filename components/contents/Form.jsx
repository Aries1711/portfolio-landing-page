"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  Phone,
  MessageCircleQuestionIcon,
} from "lucide-react";

const Form = () => {
  return (
    <from className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input required type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* email */}
      <div className="relative flex items-center">
        <Input
          required
          type="email"
          id="email"
          placeholder="johndoe@mail.com"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* phone number */}
      <div className="relative flex items-center">
        <Input required type="tel" id="phone" placeholder="+1 2318 1231" />
        <Phone className="absolute right-6" size={20} />
      </div>
      {/* Whats  */}
      <div className="relative flex items-center">
        <Textarea
          required
          type="text"
          id="whats"
          placeholder="I want to make mobile app, what should I do for the first step ?"
        />
        <MessageCircleQuestionIcon
          className="absolute top-4 right-6"
          size={20}
        />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk <ArrowRightIcon size={20} />{" "}
      </Button>
    </from>
  );
};

export default Form;
