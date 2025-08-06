'use client'

import { Button } from '@/components/ui/button'
import { VideoPlayer } from "./video-player"
import { Download, Loader2 } from 'lucide-react'
import { useState } from 'react'

interface VideoTabProps {
  videoUri: string | null
  vttUri: string | null
  isVideoLoading: boolean
  language: { name: string; code: string }
}

export function VideoTab({
  videoUri,
  vttUri,
  isVideoLoading,
  language
}: VideoTabProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    if (!videoUri) return

    try {
      setIsDownloading(true)
      
      // Create a temporary anchor element
      const link = document.createElement('a')
      link.href = videoUri
      
      // Extract filename from URL or use a default name
      const filename = videoUri.split('/').pop() || 'video.mp4'
      link.download = filename
      
      // Append to body, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading video:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header with Download button */}
      <div className="flex justify-end">
        {videoUri && (
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isDownloading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Download Movie
              </>
            )}
          </Button>
        )}
      </div>

      {videoUri && (
        <div className="mb-8">
          <VideoPlayer src={videoUri} vttSrc={vttUri} language={language} />
        </div>
      )}
    </div>
  )
} 