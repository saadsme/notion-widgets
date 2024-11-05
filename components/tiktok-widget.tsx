'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {TiktokForm }from './tiktok-form'


type UserData = {
  username: string
  apiKey?: string
  profilePic: string
  followerCount: number
}

export function TiktokWidget() {
  const [userData, setUserData] = useState<UserData | null>(null)

  const handleFormSubmit = async (username: string, apiKey?: string) => {
    // In a real application, you would make an API call to your backend here
    // Your backend would then use the TikTok API to fetch the user's data
    // For this example, we'll simulate the API call with a timeout
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Simulated API response
    setUserData({
      username,
      apiKey,
      profilePic: `https://picsum.photos/seed/${username}/200`,
      followerCount: Math.floor(Math.random() * 1000000)
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>TikTok Widget Generator</CardTitle>
        <CardDescription>Generate a widget to embed in your Notion page</CardDescription>
      </CardHeader>
      <CardContent>
        {userData ? (
          <TikTokEmbed userData={userData} />
        ) : (
          <TiktokForm onSubmit={handleFormSubmit} />
        )}
      </CardContent>
    </Card>
  )
}