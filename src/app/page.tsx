import React from 'react'
import Card from './components/card'

export default function Page() {
    return (
        <Card image={{
            thumbnail: 'data.image.thumbnail',
            mobile: 'data.image.mobile',
            tablet: 'data.image.tablet',
            desktop: 'data.image.desktop'
        }} category={''} name={''} price={0} />
    )

}