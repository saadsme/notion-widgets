"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TiktokForm } from "./tiktok-form";
import { TiktokEmbed } from "./tiktok-embed";

type UserData = {
  username: string;
  apiKey?: string;
  profilePic: string;
  followerCount: number;
};

export function TiktokWidget() {
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleFormSubmit = async (username: string, apiKey?: string) => {
    // In a real application, you would make an API call to your backend here
    // Your backend would then use the TikTok API to fetch the user's data
    // For this example, we'll simulate the API call with a timeout
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulated API response
    setUserData({
      username,
      apiKey,
      profilePic: `https://picsum.photos/seed/${username}/200`,
      followerCount: Math.floor(Math.random() * 1000000),
    });
  };

  return (
    <div className="w-full h-full">
      {userData ? (
        <div className="mx-auto p-6 flex flex-col gap-4">
          <div>Thank you for creating a widget! Here is your widget link:</div>
          <div className="bg-gray-200 rounded-lg max-w-md py-4 px-3 flex gap-4 justify-between items-center">
            <input
              className="disabled w-full rounded-lg p-2"
              type="text"
              value="https://someexamplelink.com"
            ></input>

            <div>Copy</div>
            {/* TODO: Replace with a copy icon */}
          </div>
          <div>Embed it in your application using the below instructions:</div>
        </div>
      ) : (
        <TiktokForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}
