"use client"

import Image, { type ImageProps } from "next/image"
import { type ImgHTMLAttributes, useEffect } from "react"
import Zoom, { type UncontrolledProps } from "react-medium-image-zoom"
import 'react-medium-image-zoom/dist/styles.css'
import { cn } from "@/lib/utils"

const customStyles = `
  [data-rmiz-btn-unzoom] {
    display: none !important;
  }
  [data-rmiz-modal-overlay],
  [data-rmiz-modal-content] {
    background-color: rgba(0, 0, 0, 0.8) !important;
  }
  [data-rmiz-modal-img] {
    border-radius: 1.5rem !important;
  }
`

export interface ImageZoomProps extends ImageProps {
  zoomInProps?: ImgHTMLAttributes<HTMLImageElement>
  zoomProps?: UncontrolledProps
  className?: string
}

function getImageSrc(src: ImageProps["src"]): string {
  if (typeof src === "string") return src
  if ("default" in src) return src.default.src
  return src.src
}

function StyleInjector() {
  useEffect(() => {
    // Create style element
    const styleElement = document.createElement('style')
    styleElement.innerHTML = customStyles
    document.head.appendChild(styleElement)

    // Cleanup on unmount
    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  return null
}

export function ImageZoom({
  zoomInProps,
  zoomProps,
  className,
  children,
  ...props
}: ImageZoomProps) {
  return (
    <>
      <StyleInjector />
      <Zoom
        zoomMargin={50}
        wrapElement="div"
        classDialog="fixed inset-0 z-[100]"
        classOverlay="absolute inset-0"
        closeText="Close"
        zoomImg={{
          src: getImageSrc(props.src),
          alt: props.alt,
          className: cn(
            "rounded-3xl",
            zoomInProps?.className
          ),
          ...zoomInProps,
        }}
        {...zoomProps}
      >
        {children ?? (
          <Image
            className={cn(
              "cursor-zoom-in rounded-md transition-all duration-300",
              className
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
            {...props}
          />
        )}
      </Zoom>
    </>
  )
}