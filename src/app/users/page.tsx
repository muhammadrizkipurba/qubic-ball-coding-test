
import React from 'react'
import PageTitle from '@/components/ui/PageTitle'
import UsersTable from './UsersTable'
import { fetchUsers } from '@/actions/users'

const UsersPage = async() => {
  const users = await fetchUsers();

  return (
    <div>
      <PageTitle title="Users" />
      <div className='mt-8'>
        <UsersTable users={users} />
      </div>
    </div>
  )
}

export default UsersPage