import BannerSilder from '@/compontents/bannerSilder'
import Footer from '@/compontents/footer'
import Freedelivery from '@/compontents/freedelivery'
import Header from '@/compontents/header'
import RecentBlog from '@/compontents/recentBlog'
import TrendingProducts from '@/compontents/trendingProducts'
import React from 'react'

export default function Home() {
  return (
    <div>

<>


  {/* <div className="preloader-wrapper">
    <div className="preloader"></div>
  </div> */}
<Header />
<BannerSilder />
<RecentBlog />
<TrendingProducts />
<Freedelivery />
<Footer />

</>


    </div>
  )
}
