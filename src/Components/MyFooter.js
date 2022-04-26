import { Footer, Button, Space } from '@mantine/core'

const MyFooter = () => {
return (
    <Footer height={60} p="md">
    <div style={{ display: 'flex' }}>
    <Button>
      Settings
    </Button>
      <Space w="md" />
      <Button>
      Settings
    </Button>
    <Space w="md" />
    <Button>
      Settings
    </Button>
    <Space w="md" />
    <Button>
      Settings
    </Button>
    </div>  
    </Footer>
)

}
export default MyFooter;