import React from 'react'
import * as Styles from './UserImage.Styles'
import { Image } from '../../../redux/reducers/images'

interface UserImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  data: Image
}

const UserImage: React.FC<UserImageProps> = React.memo(({ data, ...props }) => {
  return <Styles.UserImageConteiner {...props} src={data.url} alt="loading..." />
})

export default UserImage
