'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

type TikTokFormProps = {
  onSubmit: (username: string, apiKey?: string) => void
}

export function TiktokForm({ onSubmit }: TikTokFormProps) {
  const [username, setUsername] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [isPaidTier, setIsPaidTier] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(username, isPaidTier ? undefined : apiKey)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="username">TikTok Username</Label>
        <Input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          id="paid-tier"
          checked={isPaidTier}
          onCheckedChange={setIsPaidTier}
        />
        <Label htmlFor="paid-tier">Paid Tier</Label>
      </div>
      {!isPaidTier && (
        <div>
          <Label htmlFor="api-key">TikTok API Key</Label>
          <Input
            id="api-key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            required
          />
        </div>
      )}
      <Button type="submit">Generate Widget</Button>
    </form>
  )
}