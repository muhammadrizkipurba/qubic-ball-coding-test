import PageTitle from '@/components/ui/PageTitle'
import UsersTable from './UsersTable'
import { fetchUsers } from './actions'
import MainLayout from '@/layout';

const UsersPage = async () => {
  const users = await fetchUsers();

  return (
    <MainLayout>
      <PageTitle title="Users Table" />
      <div className='mt-8'>
        <UsersTable users={users} />
      </div>
    </MainLayout>
  )
}

export default UsersPage