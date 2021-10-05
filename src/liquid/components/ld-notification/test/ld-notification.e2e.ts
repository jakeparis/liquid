import { getPageWithContent } from '../../../utils/e2e-tests'

jest.useRealTimers()

const themes = [
  'none',
  'ocean',
  'bubblegum',
  // 'shake',
  // 'solvent',
  // 'tea',
]

const allowableMismatchedRatio = 0.02

describe('ld-notification', () => {
  describe('placement', () => {
    it('renders placed at the top with prop placement set to "top"', async () => {
      const page = await getPageWithContent(
        `<ld-notification placement="top"></ld-notification>`
      )

      page.evaluate(() => {
        window.dispatchEvent(
          new CustomEvent('ldNotificationAdd', {
            detail: {
              content: 'I am an info message.',
              type: 'info',
            },
          })
        )
      })

      await page.waitForChanges()

      const results = await page.compareScreenshot()
      expect(results).toMatchScreenshot({ allowableMismatchedRatio })
    })

    it('renders placed at the bottom with prop placement set to "bottom"', async () => {
      const page = await getPageWithContent(
        `<ld-notification placement="bottom"></ld-notification>`
      )

      page.evaluate(() => {
        window.dispatchEvent(
          new CustomEvent('ldNotificationAdd', {
            detail: {
              content: 'I am an info message.',
              type: 'info',
            },
          })
        )
      })

      await page.waitForChanges()

      const results = await page.compareScreenshot()
      expect(results).toMatchScreenshot({ allowableMismatchedRatio })
    })
  })

  describe('notification types', () => {
    for (const theme of themes) {
      it(`renders a notification of type "info" with theme ${theme}`, async () => {
        const page = await getPageWithContent(
          `<ld-notification></ld-notification>`,
          theme
        )

        page.evaluate(() => {
          window.dispatchEvent(
            new CustomEvent('ldNotificationAdd', {
              detail: {
                content: 'I am an info message.',
                type: 'info',
              },
            })
          )
        })

        await page.waitForChanges()

        const results = await page.compareScreenshot()
        expect(results).toMatchScreenshot({ allowableMismatchedRatio })
      })

      it(`renders a notification of type "warn" with theme ${theme}`, async () => {
        const page = await getPageWithContent(
          `<ld-notification></ld-notification>`,
          theme
        )

        page.evaluate(() => {
          window.dispatchEvent(
            new CustomEvent('ldNotificationAdd', {
              detail: {
                content: 'I am a warning.',
                type: 'warn',
              },
            })
          )
        })

        await page.waitForChanges()

        const results = await page.compareScreenshot()
        expect(results).toMatchScreenshot({ allowableMismatchedRatio })
      })

      it(`renders a notification of type "alert" with theme ${theme}`, async () => {
        const page = await getPageWithContent(
          `<ld-notification></ld-notification>`,
          theme
        )

        page.evaluate(() => {
          window.dispatchEvent(
            new CustomEvent('ldNotificationAdd', {
              detail: {
                content: 'Oooops.',
                type: 'alert',
              },
            })
          )
        })

        await page.waitForChanges()

        const results = await page.compareScreenshot()
        expect(results).toMatchScreenshot({ allowableMismatchedRatio })
      })
    }
  })

  describe('notification hierarchy', () => {
    it('queues potentially less important notifications behind notifications of type "alert"', async () => {
      const page = await getPageWithContent(
        `<ld-notification></ld-notification>`
      )

      page.evaluate(() => {
        window.dispatchEvent(
          new CustomEvent('ldNotificationAdd', {
            detail: {
              content: 'info #1',
              type: 'info',
            },
          })
        )
      })
      await page.waitForChanges()

      page.evaluate(() => {
        window.dispatchEvent(
          new CustomEvent('ldNotificationAdd', {
            detail: {
              content: 'warning #1',
              type: 'warn',
            },
          })
        )
      })
      await page.waitForChanges()

      page.evaluate(() => {
        window.dispatchEvent(
          new CustomEvent('ldNotificationAdd', {
            detail: {
              content: 'alert #1',
              type: 'alert',
            },
          })
        )
      })
      await page.waitForChanges()

      page.evaluate(() => {
        window.dispatchEvent(
          new CustomEvent('ldNotificationAdd', {
            detail: {
              content: 'info #2',
              type: 'info',
            },
          })
        )
      })
      await page.waitForChanges()

      page.evaluate(() => {
        window.dispatchEvent(
          new CustomEvent('ldNotificationAdd', {
            detail: {
              content: 'warning #2',
              type: 'warn',
            },
          })
        )
      })
      await page.waitForChanges()

      page.evaluate(() => {
        window.dispatchEvent(
          new CustomEvent('ldNotificationAdd', {
            detail: {
              content: 'alert #2',
              type: 'alert',
            },
          })
        )
      })
      await page.waitForChanges()

      page.evaluate(() => {
        window.dispatchEvent(
          new CustomEvent('ldNotificationAdd', {
            detail: {
              content: 'info #3',
              type: 'info',
            },
          })
        )
      })
      await page.waitForChanges()

      const results = await page.compareScreenshot()
      expect(results).toMatchScreenshot({ allowableMismatchedRatio })
    })
  })

  describe('notification content', () => {
    it('renders a notification with HTML content', async () => {
      const page = await getPageWithContent(
        `<ld-notification></ld-notification>`
      )

      page.evaluate(() => {
        window.dispatchEvent(
          new CustomEvent('ldNotificationAdd', {
            detail: {
              content:
                '<ld-icon name="placeholder"></ld-icon> I am a notification with an icon.',
              type: 'info',
            },
          })
        )
      })

      await page.waitForChanges()

      const results = await page.compareScreenshot()
      expect(results).toMatchScreenshot({ allowableMismatchedRatio })
    })
  })
})
