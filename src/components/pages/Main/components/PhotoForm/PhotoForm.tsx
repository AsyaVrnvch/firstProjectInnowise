import React, { useState } from 'react'
import * as Styles from './PhotoForm.Styles'
import Error from '../../../../shared/Error/Error'
import { useSelector, useDispatch } from 'react-redux'
import { selectAvatar } from '../../../../../redux/selectors/profile'
import { loadingAvatar } from '../../../../../redux/actions/profile'
import { toast } from 'react-toastify'

const PhotoForm: React.FC = React.memo(() => {
  const dispatch = useDispatch()
  const avatar = useSelector(selectAvatar)

  const types = ['image/png', 'image/jpeg']

  const toastLoadAvatar = () => toast('Please select an image file (jpeg, jpg or png)')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files![0]
    if (selected && types.includes(selected.type)) {
      dispatch(loadingAvatar(selected));
    } else {
      toastLoadAvatar();
    }
  }

  return (
    <Styles.PhotoFormContainer>
      <Styles.Image src={avatar} alt="loading..." />
      <Styles.Dropdown>
        <Styles.Label>
          <Styles.Input type="file" onChange={handleChange} />
          <span>+</span>
        </Styles.Label>
      </Styles.Dropdown>
    </Styles.PhotoFormContainer>
  )
})

export default PhotoForm
