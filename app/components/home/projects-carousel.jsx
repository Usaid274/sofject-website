'use client';

import React, { useCallback, useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Section3Img1 from "@/app/assets/home/section3-1.webp";
import Section3Img2 from "@/app/assets/home/section3-2.webp";
import Section3Img3 from "@/app/assets/home/section3-3.webp";
import Section3Img4 from "@/app/assets/home/section3-4.webp";
import Section4Img from "@/app/assets/home/section4-1.webp";

const TWEEN_FACTOR_BASE = 0.1;

const numberWithinRange = (number, min, max) => Math.min(Math.max(number, min), max)

export default function ProjectsCarousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true, })
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

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
  }, []);

  const updateSlideClasses = useCallback((emblaApi) => {
    const slides = emblaApi.slideNodes();
    const activeIndex = emblaApi.selectedScrollSnap();

    slides.forEach((slide, index) => {
      if (index === activeIndex) {
        setActiveSlideIndex(index);
        slide.classList.remove('relative', 'after:absolute', 'after:inset-0', 'after:bg-white/50', 'after:w-full', 'after:h-full', 'after:z-50');
      } else {
        slide.classList.add('relative', 'after:absolute', 'after:inset-0', 'after:bg-white/50', 'after:w-full', 'after:h-full', 'after:z-50');
      }
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)
    updateSlideClasses(emblaApi);

    emblaApi
      .on('init', updateSlideClasses)
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
      .on('scroll', updateSlideClasses)
      .on('reInit', updateSlideClasses);
  }, [emblaApi, tweenScale, updateSlideClasses])

  return (
    <>
      <div className="max-w-96 flex flex-col justify-between gap-6">
        <div>
          <h4 className="text-4xl max-sm:text-2xl font-bold">
            {projects[activeSlideIndex].name}
          </h4>

          <p className="mt-4 text-sm max-sm:text-xs">
            {projects[activeSlideIndex].description}
          </p>
        </div>

        <div className="flex gap-6 items-center">
          <Image width="40" height="40" src={projects[activeSlideIndex].clientImg} alt={`Photo of ${projects[activeSlideIndex].clientName}`} className="ring-1 ring-primary ring-offset-2 shrink-0 size-10 rounded-full object-cover" />

          <div className="flex flex-col gap-1 text-primary">
            <p className="text-sm font-medium">{projects[activeSlideIndex].clientName}</p>
            <p className="text-xs">{projects[activeSlideIndex].clientDescription}</p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto w-full overflow-hidden min-w-36">
        <div className="embla max-w-3xl mx-auto [--slide-height:25rem] [--slide-spacing:1rem] [--slide-size:24%] max-sm:[--slide-size:50%] max-sm:[--slide-height:20rem]">
          <div className="embla__viewport overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex [touch-action:pan-y_pinch-zoom] ml-[calc(var(--slide-spacing)*-1)]">
              {projects.map(p => p.img).map((img, index) => (
                <div className="embla__slide [transform:translate3d(0,0,0)] flex-[0_0_var(--slide-size)] min-w-28 pl-[var(--slide-spacing)]" key={index}>
                  <div className="embla__slide__number h-[--slide-height] select-none max-w-96 w-full">
                    <Image width="512" height="900" src={img.src} alt="Image of the project" className="relative z-50 shadow-md rounded-md object-cover w-64 h-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-16">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    </>
  )
}

function usePrevNextButtons(emblaApi, onButtonClick) {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

function PrevButton(props) {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button embla__button--prev border-2 border-primary p-1 rounded-full relative focus-visible:outline-none"
      type="button"
      {...restProps}
    >
      <MoveLeftIcon className="size-6 text-primary " />
      {children}
    </button>
  )
}

function NextButton(props) {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button embla__button--next border-2 border-primary p-1 rounded-full relative focus-visible:outline-none"
      type="button"
      {...restProps}
    >
      <MoveRightIcon className="size-6 text-primary" />
      {children}
    </button>
  )
}

const projects = [
  {
    name: 'Project Name 1',
    description: 'Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum. In diam nisl sed congue tincidunt arcu lorem integer. Scelerisque tempus scelerisque sit lectus. u lorem integer. Scelerisque tempus scelerisque sit lectus.',
    img: Section3Img1,
    clientName: 'Client Name',
    clientDescription: 'Client Company',
    clientImg: Section4Img,
  },
  {
    name: 'Project Name 2',
    description: 'Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum. In diam nisl sed congue tincidunt arcu lorem integer u lorem integer. Scelerisque tempus scelerisque sit lectus.',
    img: Section3Img2,
    clientName: 'Client Name',
    clientDescription: 'Client Company',
    clientImg: Section4Img,
  },
  {
    name: 'Project Name 3',
    description: 'Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum. In diam nisl sed congue tincidunt arcu lorem integer. Scelerisque tempus scelerisque sit lectus. u lorem integer. Scelerisque tempus scelerisque sit lectus.',
    img: Section3Img3,
    clientName: 'Client Name',
    clientDescription: 'Client Company',
    clientImg: Section4Img,
  },
  {
    name: 'Project Name 4',
    description: 'Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum. In diam nisl sed congue tincidunt arcu lorem integer u lorem integer. Scelerisque tempus scelerisque sit lectus.',
    img: Section3Img4,
    clientName: 'Client Name',
    clientDescription: 'Client Company',
    clientImg: Section4Img,
  },
  {
    name: 'Project Name 5',
    description: 'Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum. In diam nisl sed congue tincidunt arcu lorem integer. Scelerisque tempus scelerisque sit lectus. u lorem integer. Scelerisque tempus scelerisque sit lectus.',
    img: Section3Img1,
    clientName: 'Client Name',
    clientDescription: 'Client Company',
    clientImg: Section4Img,
  },
  {
    name: 'Project Name 6',
    description: 'Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum. In diam nisl sed congue tincidunt arcu lorem integer u lorem integer. Scelerisque tempus scelerisque sit lectus.',
    img: Section3Img2,
    clientName: 'Client Name',
    clientDescription: 'Client Company',
    clientImg: Section4Img,
  },
  {
    name: 'Project Name 7',
    description: 'Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum. In diam nisl sed congue tincidunt arcu lorem integer. Scelerisque tempus scelerisque sit lectus. u lorem integer. Scelerisque tempus scelerisque sit lectus.',
    img: Section3Img3,
    clientName: 'Client Name',
    clientDescription: 'Client Company',
    clientImg: Section4Img,
  },
  {
    name: 'Project Name 8',
    description: 'Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum. In diam nisl sed congue tincidunt arcu lorem integer u lorem integer. Scelerisque tempus scelerisque sit lectus.',
    img: Section3Img4,
    clientName: 'Client Name',
    clientDescription: 'Client Company',
    clientImg: Section4Img,
  },
]
