import EmblaCarousel from './EmblaCarousel'
import type { EmblaOptionsType } from 'embla-carousel'
const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function TrendingSlider() {

    return (
        <div className="w-full py-4">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    )
}

export default TrendingSlider;
