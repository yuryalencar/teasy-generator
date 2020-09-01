import { useToasts } from 'react-toast-notifications'
const { addToast } = useToasts()

export const Toast = (content) =>  addToast(content, { appearance: 'error', autoDismiss: true})


