import { RequestHandler } from "express";
import Video from "./Video";

export const createVideo: RequestHandler = async (req, res) =>{
    const video = new Video(req.body)
    const savedVideo = await video.save()
    res.json(savedVideo)
} 
export const getVideos: RequestHandler =  (req, res) =>{
    res.json('getting videos')
} 
export const updateVideos: RequestHandler =  (req, res) =>{
    res.json('udate videos')
} 
export const deleteVideos: RequestHandler = async (req, res) =>{
    const videoDelete = await Video.findByIdAndDelete(req.params.id);
    if (!videoDelete) {
        return res.status(204).json()
    }else{
        res.json('delete videos')
    }   
}