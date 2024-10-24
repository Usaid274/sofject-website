'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import { StarIcon } from 'lucide-react';

const TWEEN_FACTOR_BASE = 0.21

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

export default function TestimonialCarousel(props) {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number')
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const scale = numberWithinRange(tweenValue, 0, 1).toString()
        const tweenNode = tweenNodes.current[slideIndex]
        tweenNode.style.transform = `scale(${scale})`
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])

  return (
    <div className="embla max-w-7xl mx-auto [--slide-height:25rem] [--slide-spacing:1rem] [--slide-size:33%] max-lg:[--slide-size:65%] max-lg:[--slide-spacing:0.2rem] max-lg:[--slide-height:24rem] max-sm:[--slide-height:20rem]">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex [touch-action:pan-y_pinch-zoom] ml-[calc(var(--slide-spacing)*-1)]">
          {slides.map((t, index) => (
            <div className="embla__slide [transform:translate3d(0,0,0)] flex-[0_0_var(--slide-size)] min-w-0 max-w-max pl-[var(--slide-spacing)] cursor-grab active:cursor-grabbing" key={index}>
              <article className="embla__slide__number h-[--slide-height] select-none border-2 border-primary rounded-2xl p-8 max-sm:p-4 flex justify-center items-center flex-col max-w-96 w-full">
                <div>
                  <Image width="144" height="144" className="size-36 max-sm:size-24 max-md:size-28 rounded-full object-cover mx-auto" src={t.img.src} alt={`Photo of ${t.name}`} />
                </div>

                <p className="font-serif text-2xl text-center mt-2 max-sm:text-lg">{t.name}</p>

                <div className="mt-2 flex gap-2 justify-center items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <StarIcon
                      key={index}
                      className="size-6 shrink-0 max-sm:size-4"
                      fill={index < t.rating ? "#CE8E59" : "#D3D3D3"}
                      strokeWidth="0"
                    />
                  ))}
                </div>

                <p className="mt-4 text-center text-sm max-sm:text-xs">
                  {t.paragraph}
                </p>
              </article>
            </div>
          ))}
        </div>

      </div>
      
      <div className="embla__dots flex gap-3 justify-center items-center mt-6">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            data-selected={index === selectedIndex}
            className={`embla__dot size-3 rounded-full data-[selected=true]:bg-primary border border-primary`}
          />
        ))}
      </div>
    </div>
  );
}

function useDotButton(emblaApi, onButtonClick) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
      if (onButtonClick) onButtonClick(emblaApi)
    },
    [emblaApi, onButtonClick]
  )

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)

    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

function DotButton(props) {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}
