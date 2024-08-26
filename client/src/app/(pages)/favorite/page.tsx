import NavList from '@/components/UI/NavList/NavList'
import { NextPage } from 'next'

interface Props {}

const Favorite: NextPage<Props> = ({}) => {
  return (
    <>
      <NavList currentPath='favorite' path={{'Catalog': '/catalog', 'Apple': '/catalog/apple'}} />
    </>
  )
}

export default Favorite