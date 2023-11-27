import { newSpecPage } from '@stencil/core/testing'
import { LdUploadItem } from '../ld-upload-item'
import { LdFileUpload, UploadItem } from '../../ld-file-upload'
import { LdUploadProgress } from '../../ld-upload-progress/ld-upload-progress'
import '../../../../utils/mutationObserver'

describe('ld-upload-item', () => {
  it('renders default', async () => {
    const page = await newSpecPage({
      components: [LdUploadItem],
      html: `<ld-upload-item file-name='Liquid' file-size='1.28'></ld-upload-item>`,
    })
    expect(page.root).toMatchSnapshot()
  })

  it('renders with custom icon', async () => {
    const page = await newSpecPage({
      components: [LdUploadItem, LdUploadProgress, LdFileUpload],
      html: `<ld-file-upload>
      <ld-icon slot='icons' data-upload-icon='application/pdf' name='pdf' size='lg'></ld-icon>
      <ld-icon slot='icons' data-upload-icon='text/rtf' name='document' size='lg'></ld-icon>
      </ld-file-upload>`,
    })
    const ldFileUpload = page.root

    const ldchoosefilesHandler = jest.fn()
    ldFileUpload.addEventListener('ldchoosefiles', ldchoosefilesHandler)

    const ldfileuploadreadyHandler = jest.fn()
    ldFileUpload.addEventListener('ldfileuploadready', ldfileuploadreadyHandler)

    const data: UploadItem[] = [
      {
        file: undefined,
        state: 'uploading',
        fileName: 'file1.pdf',
        fileSize: 1024,
        fileType: 'application/pdf',
        progress: 0,
      },
      {
        file: undefined,
        state: 'uploading',
        fileName: 'file2.rtf',
        fileSize: 1024,
        fileType: 'text/rtf',
        progress: 0,
      },
    ]

    ldFileUpload.dispatchEvent(
      new CustomEvent('ldchoosefiles', { detail: data, bubbles: true })
    )

    ldFileUpload.addEventListener(
      'ldchoosefiles',
      await ldFileUpload.addUploadItems(data)
    )

    await page.waitForChanges()

    expect(page.root).toMatchSnapshot()
  })

  // TODO: check if node is cloned correctly
  it('clones custom icon', async () => {
    const page = await newSpecPage({
      components: [LdUploadItem, LdFileUpload],
      html: `<ld-file-upload>
      <ld-icon slot='icons' data-upload-icon='application/pdf' name='pdf' size='lg'></ld-icon>
      </ld-file-upload>`,
    })
    expect(page.root).toMatchSnapshot()
  })

  describe('changes state according to props', () => {
    it('changes to state pending', async () => {
      const page = await newSpecPage({
        components: [LdUploadItem],
        html: `<ld-upload-item state='pending' file-name='Liquid' file-size='1.28'></ld-upload-item>`,
      })
      expect(page.root.state).toBe('pending')
    })

    it('changes to state uploading', async () => {
      const page = await newSpecPage({
        components: [LdUploadItem],
        html: `<ld-upload-item state='uploading' file-name='Liquid' file-size='1.28'></ld-upload-item>`,
      })
      expect(page.root.state).toBe('uploading')
    })

    it('changes to state uploaded', async () => {
      const page = await newSpecPage({
        components: [LdUploadItem],
        html: `<ld-upload-item state='uploaded' file-name='Liquid' file-size='1.28'></ld-upload-item>`,
      })
      expect(page.root.state).toBe('uploaded')
    })

    it('changes to state upload failed', async () => {
      const page = await newSpecPage({
        components: [LdUploadItem],
        html: `<ld-upload-item state='upload failed' file-name='Liquid' file-size='1.28'></ld-upload-item>`,
      })
      expect(page.root.state).toBe('upload failed')
    })
  })

  describe('emits events according to button click', () => {
    // Pause/continue might be added at a later time

    // it('emits lduploaditempause event', async () => {
    //   const page = await newSpecPage({
    //     components: [LdUploadItem],
    //     html: `<ld-upload-item allow-pause state='uploading' file-name='Liquid' file-size='1.28' />`,
    //   })
    //   const ldUploadItem = page.root
    //   const pauseButton =
    //     ldUploadItem.shadowRoot.querySelector<HTMLLdButtonElement>(
    //       'ld-button[class="ld-upload-item__pause-button"]'
    //     )

    //   const lduploaditempauseHandler = jest.fn()
    //   ldUploadItem.addEventListener(
    //     'lduploaditempause',
    //     lduploaditempauseHandler
    //   )

    //   pauseButton.click()
    //   await page.waitForChanges()

    //   expect(lduploaditempauseHandler).toHaveBeenCalled()
    // })

    // it('emits lduploaditemcontinue event', async () => {
    //   const page = await newSpecPage({
    //     components: [LdUploadItem],
    //     html: `<ld-upload-item allow-pause state='paused' file-name='Liquid' file-size='1.28' />`,
    //   })
    //   const ldUploadItem = page.root
    //   const continueButton =
    //     ldUploadItem.shadowRoot.querySelector<HTMLLdButtonElement>(
    //       'ld-button[class="ld-upload-item__continue-button"]'
    //     )

    //   const lduploaditemcontinueHandler = jest.fn()
    //   ldUploadItem.addEventListener(
    //     'lduploaditemcontinue',
    //     lduploaditemcontinueHandler
    //   )

    //   continueButton.click()
    //   await page.waitForChanges()

    //   expect(lduploaditemcontinueHandler).toHaveBeenCalled()
    // })

    it('emits lduploaditemremove event', async () => {
      const page = await newSpecPage({
        components: [LdUploadItem],
        html: `<ld-upload-item allow-pause state='pending' file-name='Liquid' file-size='1.28' />`,
      })
      const ldUploadItem = page.root
      const removeButton =
        ldUploadItem.shadowRoot.querySelector<HTMLLdButtonElement>(
          'ld-button[class="ld-upload-item__remove-button"]'
        )

      const lduploaditemremoveHandler = jest.fn()
      ldUploadItem.addEventListener(
        'lduploaditemremove',
        lduploaditemremoveHandler
      )

      removeButton.click()
      await page.waitForChanges()

      expect(lduploaditemremoveHandler).toHaveBeenCalled()
    })

    it('emits lduploaditemdownload event', async () => {
      const page = await newSpecPage({
        components: [LdUploadItem],
        html: `<ld-upload-item allow-pause state='uploaded' file-name='Liquid' file-size='1.28' />`,
      })
      const ldUploadItem = page.root
      const downloadButton =
        ldUploadItem.shadowRoot.querySelector<HTMLLdButtonElement>(
          'ld-button[class="ld-upload-item__download-button"]'
        )

      const lduploaditemdownloadHandler = jest.fn()
      ldUploadItem.addEventListener(
        'lduploaditemdownload',
        lduploaditemdownloadHandler
      )

      downloadButton.click()
      await page.waitForChanges()

      expect(lduploaditemdownloadHandler).toHaveBeenCalled()
    })

    it('emits lduploaditemretry event', async () => {
      const page = await newSpecPage({
        components: [LdUploadItem],
        html: `<ld-upload-item allow-pause state='upload failed' file-name='Liquid' file-size='1.28' />`,
      })
      const ldUploadItem = page.root
      const retryButton =
        ldUploadItem.shadowRoot.querySelector<HTMLLdButtonElement>(
          'ld-button[class="ld-upload-item__retry-button"]'
        )

      const lduploaditemretryHandler = jest.fn()
      ldUploadItem.addEventListener(
        'lduploaditemretry',
        lduploaditemretryHandler
      )

      retryButton.click()
      await page.waitForChanges()

      expect(lduploaditemretryHandler).toHaveBeenCalled()
    })

    it('emits lduploaditemdelete event', async () => {
      const page = await newSpecPage({
        components: [LdUploadItem],
        html: `<ld-upload-item allow-pause state='uploaded' file-name='Liquid' file-size='1.28' />`,
      })
      const ldUploadItem = page.root
      const deleteButton =
        ldUploadItem.shadowRoot.querySelector<HTMLLdButtonElement>(
          'ld-button[class="ld-upload-item__delete-button"]'
        )

      const lduploaditemdeleteHandler = jest.fn()
      ldUploadItem.addEventListener(
        'lduploaditemdelete',
        lduploaditemdeleteHandler
      )

      deleteButton.click()
      await page.waitForChanges()

      expect(lduploaditemdeleteHandler).toHaveBeenCalled()
    })
  })

  describe('changes size unit according to props', () => {
    it('changes to size KB', async () => {
      const page = await newSpecPage({
        components: [LdUploadItem],
        html: `<ld-upload-item state='pending' file-name='Liquid' file-size='1024'></ld-upload-item>`,
      })
      const fileSize = page.root.shadowRoot.querySelector<HTMLLdTypoElement>(
        'ld-typo[class="ld-upload-item__file-size"]'
      )
      expect(fileSize.innerText).toBe('1 KB')
    })

    it('changes to size MB if progress is being shown', async () => {
      const page = await newSpecPage({
        components: [LdUploadItem],
        html: `<ld-upload-item show-progress state='uploading' file-name='Liquid' file-size='1048576' progress='0'></ld-upload-item>`,
      })
      const fileSize = page.root.shadowRoot.querySelector<HTMLLdTypoElement>(
        'ld-typo[class="ld-upload-item__file-size"]'
      )
      expect(fileSize.innerText).toBe('0 Bytes / 1 MB')
    })
  })
})