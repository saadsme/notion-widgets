import { TiktokEmbed } from '@/components/tiktok-embed'
import React from 'react'

const page = () => {
  return (
    <div>
      <TiktokEmbed userData={{ username: 'saadwrk', profilePic: 'https://pbs.twimg.com/profile_images/1670083937104143616/4-2-0-source.jpg', followerCount: 100 }} />
    </div>
  )
}

export default page
