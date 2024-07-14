import React from 'react'
import { Link } from 'react-router-dom'
import appWriteService from '../appwrite/config'

const PostCard = ({ $id, title, featuredImage }) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appWriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
                    <h4>{title}</h4>
                </div>
            </div>
        </Link>
    )
}

export default PostCard