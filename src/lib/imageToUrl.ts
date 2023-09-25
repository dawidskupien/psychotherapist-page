import {useSanityClient, createImageBuilder} from 'astro-sanity'

export const imageBuilder = createImageBuilder(useSanityClient());

export const imageToUrl = (source: string) => {
    return imageBuilder.image(source);
}