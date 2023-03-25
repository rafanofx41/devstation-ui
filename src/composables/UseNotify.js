import { useQuasar } from 'quasar'

export default function useNotify () {
  const $q = useQuasar()

  const notifySuccess = (message) => {
    $q.notify({
      type: 'positive',
      progress: true,
      message: message || 'Success',
    })
  }

  const notifyError = (message) => {
    $q.notify({
      type: 'negative',
      progress: true,
      message: message || 'Error',
    })
  }

  const notifyInfo = (message) => {
    $q.notify({
      type: 'info',
      progress: true,
      message: message || 'Info',
    })
  }

  const notifyWarning = (message) => {
    $q.notify({
      type: 'warning',
      progress: true,
      message: message || 'Warning',
    })
  }

  return {
    notifySuccess,
    notifyError,
    notifyInfo,
    notifyWarning,
  }
}
