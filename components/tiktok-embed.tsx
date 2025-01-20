"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

type TikTokEmbedProps = {
  userData: {
    username: string;
    profilePic: string;
    followerCount: number;
  };
};

export function TiktokEmbed({ userData }: TikTokEmbedProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-background border rounded-lg h-screen">
      <Avatar className="h-20 w-20">
        <AvatarImage src={userData.profilePic} alt={userData.username} />
        <AvatarFallback>
          <User />
        </AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-2xl font-bold">@{userData.username}</h2>
        <p className="text-muted-foreground">
          {userData.followerCount.toLocaleString()} followers
        </p>
      </div>
    </div>
  );
}
