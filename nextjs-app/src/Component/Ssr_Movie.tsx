import {bundle} from "@remotion/bundler"
import { getCompositions,renderMedia } from "@remotion/renderer"
import path from "path"

const start = async () => {
    const CompositionId =  "Hello World"
    const entry = "src/app/page.tsx"
    console.log("Creating a Webpack bundle of the video")
    const bundleLocation = await bundle(path.resolve(entry), () => undefined,{
        webpackOverride: (config) => config,
    })
}