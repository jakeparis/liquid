---
eleventyNavigation:
  key: File Upload
  parent: Components
layout: layout.njk
title: File Upload
permalink: components/ld-file-upload/
---

# ld-file-upload

File upload allows the user to upload files.

## Examples

### Default

In default mode, files to be uploaded can be chosen in multiple steps but upload can only be started once on start upload click.

{% example '{ "opened": true }' %}
<ld-file-upload></ld-file-upload>

<!-- React component -->
<LdFileUpload />

<!-- CSS component -->

{% endexample %}

#### State management:

State management such as changing the upload state or progress of a file has to be done by the user. Every event emits a an upload item (`UploadItem = {
  state:
    | 'pending'
    | 'paused'
    | 'cancelled'
    | 'uploading'
    | 'uploaded'
    | 'upload failed'
  fileName: string
  fileSize: number
  fileType: string
  progress: number
  file: File
}`) or an array of upload items. For each event, the states need to be changed using methods.

Unless the width of the component is specified, it will adjust to the available space depending on its content.

{% example '{ "opened": false }' %}
<ld-file-upload>
</ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        if (item.state !== 'cancelled') {
          newItem = uploadItems[item]
          newItem.state = 'uploading'
          uploadingItems.push(newItem)
          ldUpload.updateUploadItem(newItem)
        }
      }
    })

    // ldUpload.addEventListener('lduploaditempause', async (ev) => {
    //   uploadItem = ev.detail
    //   uploadItem.state = 'paused'
    //   ldUpload.updateUploadItem(uploadItem)
    // })

    // ldUpload.addEventListener('lduploaditemcontinue', async (ev) => {
    //   uploadItem = ev.detail
    //   uploadItem.state = 'uploading'
    //   ldUpload.updateUploadItem(uploadItem)
    // })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })

    // ldUpload.addEventListener('ldfileuploaddeleteall', async (ev) => {
    //   ldUpload.deleteAllUploadItems()
    // })

    // ldUpload.addEventListener('ldfileuploadpausealluploads', async (ev) => {
    //   uploadItems = ev.detail
    //   for (let item in uploadItems) {
    //     newItem = uploadItems[item]
    //     newItem.state = 'paused'
    //     ldUpload.updateUploadItem(newItem)
    //   }
    // })

    // ldUpload.addEventListener('ldfileuploadcontinueuploads', async (ev) => {
    //   uploadItems = ev.detail
    //   for (let item in uploadItems) {
    //     newItem = uploadItems[item]
    //     newItem.state = 'uploading'
    //     ldUpload.updateUploadItem(newItem)
    //   }
    // })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef(null)

return (
<>
<LdFileUpload
ref={fileUploadRef}
onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLduploaditemremove={async (ev) => {
const uploadItem = ev.detail
uploadItem.state = 'cancelled'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(uploadItem)
}
}}
onLduploaditemdelete={async (ev) => {
const uploadItem = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.deleteUploadItem(uploadItem)
}
}}

<!-- onLdfileuploaddeleteall={async () => {
if (fileUploadRef.current) {
fileUploadRef.current.deleteAllUploadItems()
}
}} -->

<!-- onLdfileuploadpausealluploads={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'paused'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}} -->
<!-- onLdfileuploadcontinueuploads={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}} -->

/>
</>
)

<!-- CSS component -->

{% endexample %}

#### File upload in card

{% example '{ "opened": false }' %}
<ld-card>
<ld-file-upload></ld-file-upload>
</ld-card>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling.querySelector('ld-file-upload')

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdCard>
<LdFileUpload
ref={fileUploadRef}
onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLduploaditemremove={async (ev) => {
const uploadItem = ev.detail
uploadItem.state = 'cancelled'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(uploadItem)
}
}}
onLduploaditemdelete={async (ev) => {
const uploadItem = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.deleteUploadItem(uploadItem)
}
}}
/>
</LdCard>

<!-- CSS component -->

{% endexample %}

#### File upload in modal

{% example '{ "opened": false }' %}
<ld-modal>
<ld-file-upload></ld-file-upload>
</ld-modal>

<ld-button onclick="event.target.previousElementSibling.showModal()">Open File Upload</ld-button>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling.previousElementSibling.querySelector('ld-file-upload')

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      /* ldUpload.deleteUploadItem(uploadItem) */
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdCard>
<LdFileUpload
ref={fileUploadRef}
onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLduploaditemremove={async (ev) => {
const uploadItem = ev.detail
uploadItem.state = 'cancelled'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(uploadItem)
}
}}
onLduploaditemdelete={async (ev) => {
const uploadItem = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.deleteUploadItem(uploadItem)
}
}}
/>
</LdCard>

<!-- CSS component -->

{% endexample %}

#### Upload with XMLHttpRequest

Files to be uploaded can be accessed through the `file` property of the UploadItem objects emitted on `ldfileuploadready`. XMLHttpRequest can be used to update the upload progress in the component.

{% example '{ "opened": false }' %}
<ld-file-upload multiple show-progress style="width: 30rem">
</ld-file-upload>

<!-- style="width: 30rem, height: 50rem"> -->

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        ldUpload.updateUploadItem(newItem)
        file = uploadItems[item].file

        const xhr = new XMLHttpRequest()
        const success = await new Promise((resolve) => {
          xhr.upload.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
              newItem = uploadItems[item]
              newItem.progress = event.loaded / event.total * 100
              ldUpload.updateUploadItem(newItem)
            }
          });
          xhr.addEventListener("loadend", () => {
            resolve(xhr.readyState === 4 && xhr.status === 200)
          })
          ldUpload.addEventListener('lduploaditemremove', async (ev) => {
            uploadItem = ev.detail
            if (uploadItem.fileName === uploadItems[item].fileName) {
              newItem = uploadItems[item]
              newItem.state = 'cancelled'
              ldUpload.updateUploadItem(newItem)
              xhr.abort(ev.detail.file)
            }
          })
          xhr.open("PUT", "https://httpbin.org/put", true)
          xhr.setRequestHeader("Content-Type", "application/octet-stream")
          xhr.send(file)
        })
        if (success) {
          newItem = uploadItems[item]
        newItem.state = 'uploaded'
        ldUpload.updateUploadItem(newItem)
        } else if (uploadItems[item].state != 'cancelled') {
          newItem = uploadItems[item]
        newItem.state = "upload failed"
        ldUpload.updateUploadItem(newItem)
        }
      }
    })

    ldUpload.addEventListener('lduploaditemdownload', async (ev) => {
      uploadItem = ev.detail
      window.open("https://liquid.merck.design/liquid/")
    })

    ldUpload.addEventListener('lduploaditemretry', async (ev) => {
      uploadItem = ev.detail
      uploadItems = []
      uploadItems.push(uploadItem)
      event = new CustomEvent('ldfileuploadready', { detail: uploadItems });
      ldUpload.dispatchEvent(event)
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
multiple
show-progress

<!-- add width -->

onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}

            const file = uploadItems[item].file

            const xhr = new XMLHttpRequest()
            const success = await new Promise((resolve) => {
              xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                  const newItem = uploadItems[item]
                  newItem.progress = (event.loaded / event.total) * 100
                  if (fileUploadRef.current) {
                    fileUploadRef.current.updateUploadItem(newItem)
                  }
                }
              })
              xhr.addEventListener('loadend', () => {
                resolve(xhr.readyState === 4 && xhr.status === 200)
              })

              if (fileUploadRef.current) {
                fileUploadRef.current.addEventListener(
                  'lduploaditemremove',
                  async (ev) => {
                    const uploadItem = ev.detail
                    if (uploadItem.fileName === uploadItems[item].fileName) {
                      const newItem = uploadItems[item]
                      newItem.state = 'cancelled'
                      fileUploadRef.current.updateUploadItem(newItem)
                      xhr.abort(ev.detail.file)
                    }
                  }
                )
              }

              xhr.open('PUT', 'https://httpbin.org/put', true)
              xhr.setRequestHeader('Content-Type', 'application/octet-stream')
              xhr.send(file)
            })
            if (success) {
              const newItem = uploadItems[item]
              newItem.state = 'uploaded'
              if (fileUploadRef.current) {
                fileUploadRef.current.updateUploadItem(newItem)
              }
            } else if (uploadItems[item].state != 'cancelled') {
              const newItem = uploadItems[item]
              newItem.state = 'upload failed'
              if (fileUploadRef.current) {
                fileUploadRef.current.updateUploadItem(newItem)
              }
            }
          }
        }}
        onLduploaditemdownload={async () => {
          window.open('https://liquid.merck.design/liquid/')
        }}
        onLduploaditemretry={async (ev) => {
          const uploadItem = ev.detail
          const uploadItems = []
          uploadItems.push(uploadItem)
          const uploadevent = new CustomEvent('ldfileuploadready', {
            detail: uploadItems,
          })
          if (fileUploadRef.current) {
            fileUploadRef.current.dispatchEvent(uploadevent)
          }
        }}
        onLduploaditemremove={async (ev) => {
          const uploadItem = ev.detail
          uploadItem.state = 'cancelled'
          if (fileUploadRef.current) {
            fileUploadRef.current.updateUploadItem(uploadItem)
          }
        }}
        onLduploaditemdelete={async (ev) => {
          const uploadItem = ev.detail
          if (fileUploadRef.current) {
            fileUploadRef.current.deleteUploadItem(uploadItem)
          }
        }}
      />

<!-- CSS component -->

{% endexample %}

#### Upload with XMLHttpRequest with random success

This is just for testing. Upload success is overwritten with a random true/false value to test the retry feature.

{% example '{ "opened": false }' %}
<ld-file-upload multiple show-progress style="width: 30rem">
</ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        ldUpload.updateUploadItem(newItem)
        file = uploadItems[item].file

        const xhr = new XMLHttpRequest()
        const success = await new Promise((resolve) => {
          xhr.upload.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
              newItem = uploadItems[item]
              newItem.progress = event.loaded / event.total * 100
              ldUpload.updateUploadItem(newItem)
            }
          });
          xhr.addEventListener("loadend", () => {
            resolve(xhr.readyState === 4 && xhr.status === 200)
          })
          ldUpload.addEventListener('lduploaditemremove', async (ev) => {
            uploadItem = ev.detail
            if (uploadItem.fileName === uploadItems[item].fileName) {
              newItem = uploadItems[item]
              newItem.state = 'cancelled'
              ldUpload.updateUploadItem(newItem)
              xhr.abort(ev.detail.file)
            }
          })
          xhr.open("PUT", "https://httpbin.org/put", true)
          xhr.setRequestHeader("Content-Type", "application/octet-stream")
          xhr.send(file)
        })
        success2 = Math.floor(Math.random() * 2) === 1 ? true : false
        if (success2) {
          newItem = uploadItems[item]
        newItem.state = 'uploaded'
        ldUpload.updateUploadItem(newItem)
        } else if (uploadItems[item].state != 'cancelled') {
          newItem = uploadItems[item]
        newItem.state = "upload failed"
        ldUpload.updateUploadItem(newItem)
        }
      }
    })

    ldUpload.addEventListener('lduploaditemdownload', async (ev) => {
      uploadItem = ev.detail
      window.open("https://liquid.merck.design/liquid/")
    })

    ldUpload.addEventListener('lduploaditemretry', async (ev) => {
      uploadItem = ev.detail
      uploadItems = []
      uploadItems.push(uploadItem)
      event = new CustomEvent('ldfileuploadready', { detail: uploadItems });
      ldUpload.dispatchEvent(event)
    })

    // ldUpload.addEventListener('lduploaditemremove', async (ev) => {
    //   uploadItem = ev.detail
    //   /* ldUpload.deleteUploadItem(uploadItem) */
    //   uploadItem.state = 'cancelled'
    //   ldUpload.updateUploadItem(uploadItem)
    //   xhr.abort(ev.detail.file)
    // })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
multiple
show-progress

<!-- add width -->

onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}

            const file = uploadItems[item].file

            const xhr = new XMLHttpRequest()
            const success = await new Promise((resolve) => {
              xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                  const newItem = uploadItems[item]
                  newItem.progress = (event.loaded / event.total) * 100
                  if (fileUploadRef.current) {
                    fileUploadRef.current.updateUploadItem(newItem)
                  }
                }
              })
              xhr.addEventListener('loadend', () => {
                resolve(xhr.readyState === 4 && xhr.status === 200)
              })

              if (fileUploadRef.current) {
                fileUploadRef.current.addEventListener(
                  'lduploaditemremove',
                  async (ev) => {
                    const uploadItem = ev.detail
                    if (uploadItem.fileName === uploadItems[item].fileName) {
                      const newItem = uploadItems[item]
                      newItem.state = 'cancelled'
                      fileUploadRef.current.updateUploadItem(newItem)
                      xhr.abort(ev.detail.file)
                    }
                  }
                )
              }

              xhr.open('PUT', 'https://httpbin.org/put', true)
              xhr.setRequestHeader('Content-Type', 'application/octet-stream')
              xhr.send(file)
            })
            const success2 = Math.floor(Math.random() * 2) === 1 ? true : false
            if (success2) {
              const newItem = uploadItems[item]
              newItem.state = 'uploaded'
              if (fileUploadRef.current) {
                fileUploadRef.current.updateUploadItem(newItem)
              }
            } else if (uploadItems[item].state != 'cancelled') {
              const newItem = uploadItems[item]
              newItem.state = 'upload failed'
              if (fileUploadRef.current) {
                fileUploadRef.current.updateUploadItem(newItem)
              }
            }
          }
        }}
        onLduploaditemdownload={async () => {
          window.open('https://liquid.merck.design/liquid/')
        }}
        onLduploaditemretry={async (ev) => {
          const uploadItem = ev.detail
          const uploadItems = []
          uploadItems.push(uploadItem)
          const uploadevent = new CustomEvent('ldfileuploadready', {
            detail: uploadItems,
          })
          if (fileUploadRef.current) {
            fileUploadRef.current.dispatchEvent(uploadevent)
          }
        }}
        onLduploaditemremove={async (ev) => {
          const uploadItem = ev.detail
          uploadItem.state = 'cancelled'
          if (fileUploadRef.current) {
            fileUploadRef.current.updateUploadItem(uploadItem)
          }
        }}
        onLduploaditemdelete={async (ev) => {
          const uploadItem = ev.detail
          if (fileUploadRef.current) {
            fileUploadRef.current.deleteUploadItem(uploadItem)
          }
        }}
      />

<!-- CSS component -->

{% endexample %}

#### Upload with XMLHttpRequest (without exact progress)

{% example '{ "opened": false }' %}
<ld-file-upload multiple style="width: 30rem">
</ld-file-upload>

<!-- style="width: 30rem, height: 50rem"> -->

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        ldUpload.updateUploadItem(newItem)
        file = uploadItems[item].file

        const xhr = new XMLHttpRequest()
        const success = await new Promise((resolve) => {
          xhr.upload.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
              newItem = uploadItems[item]
              newItem.progress = event.loaded / event.total * 100
              ldUpload.updateUploadItem(newItem)
            }
          });
          xhr.addEventListener("loadend", () => {
            resolve(xhr.readyState === 4 && xhr.status === 200)
          })
          ldUpload.addEventListener('lduploaditemremove', async (ev) => {
            uploadItem = ev.detail
            if (uploadItem.fileName === uploadItems[item].fileName) {
              newItem = uploadItems[item]
              newItem.state = 'cancelled'
              ldUpload.updateUploadItem(newItem)
              xhr.abort(ev.detail.file)
            }
          })
          xhr.open("PUT", "https://httpbin.org/put", true)
          xhr.setRequestHeader("Content-Type", "application/octet-stream")
          xhr.send(file)
        })
        if (success) {
          newItem = uploadItems[item]
        newItem.state = 'uploaded'
        ldUpload.updateUploadItem(newItem)
        } else if (uploadItems[item].state != 'cancelled') {
          newItem = uploadItems[item]
        newItem.state = "upload failed"
        ldUpload.updateUploadItem(newItem)
        }
      }
    })

    ldUpload.addEventListener('lduploaditemdownload', async (ev) => {
      uploadItem = ev.detail
      window.open("https://liquid.merck.design/liquid/")
    })

    ldUpload.addEventListener('lduploaditemretry', async (ev) => {
      uploadItem = ev.detail
      uploadItems = []
      uploadItems.push(uploadItem)
      event = new CustomEvent('ldfileuploadready', { detail: uploadItems });
      ldUpload.dispatchEvent(event)
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
multiple

<!-- add width -->

onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}

            const file = uploadItems[item].file

            const xhr = new XMLHttpRequest()
            const success = await new Promise((resolve) => {
              xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                  const newItem = uploadItems[item]
                  newItem.progress = (event.loaded / event.total) * 100
                  if (fileUploadRef.current) {
                    fileUploadRef.current.updateUploadItem(newItem)
                  }
                }
              })
              xhr.addEventListener('loadend', () => {
                resolve(xhr.readyState === 4 && xhr.status === 200)
              })

              if (fileUploadRef.current) {
                fileUploadRef.current.addEventListener(
                  'lduploaditemremove',
                  async (ev) => {
                    const uploadItem = ev.detail
                    if (uploadItem.fileName === uploadItems[item].fileName) {
                      const newItem = uploadItems[item]
                      newItem.state = 'cancelled'
                      fileUploadRef.current.updateUploadItem(newItem)
                      xhr.abort(ev.detail.file)
                    }
                  }
                )
              }

              xhr.open('PUT', 'https://httpbin.org/put', true)
              xhr.setRequestHeader('Content-Type', 'application/octet-stream')
              xhr.send(file)
            })
            if (success) {
              const newItem = uploadItems[item]
              newItem.state = 'uploaded'
              if (fileUploadRef.current) {
                fileUploadRef.current.updateUploadItem(newItem)
              }
            } else if (uploadItems[item].state != 'cancelled') {
              const newItem = uploadItems[item]
              newItem.state = 'upload failed'
              if (fileUploadRef.current) {
                fileUploadRef.current.updateUploadItem(newItem)
              }
            }
          }
        }}
        onLduploaditemdownload={async () => {
          window.open('https://liquid.merck.design/liquid/')
        }}
        onLduploaditemretry={async (ev) => {
          const uploadItem = ev.detail
          const uploadItems = []
          uploadItems.push(uploadItem)
          const uploadevent = new CustomEvent('ldfileuploadready', {
            detail: uploadItems,
          })
          if (fileUploadRef.current) {
            fileUploadRef.current.dispatchEvent(uploadevent)
          }
        }}
        onLduploaditemremove={async (ev) => {
          const uploadItem = ev.detail
          uploadItem.state = 'cancelled'
          if (fileUploadRef.current) {
            fileUploadRef.current.updateUploadItem(uploadItem)
          }
        }}
        onLduploaditemdelete={async (ev) => {
          const uploadItem = ev.detail
          if (fileUploadRef.current) {
            fileUploadRef.current.deleteUploadItem(uploadItem)
          }
        }}
      />

<!-- CSS component -->

{% endexample %}

#### Upload with XMLHttpRequest, starting upload immediately

{% example '{ "opened": false }' %}
<ld-file-upload multiple show-progress start-upload-immediately style="width: 30rem">
</ld-file-upload>

<!-- style="width: 30rem, height: 50rem"> -->

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        ldUpload.updateUploadItem(newItem)
        file = uploadItems[item].file

        const xhr = new XMLHttpRequest()
        const success = await new Promise((resolve) => {
          xhr.upload.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
              newItem = uploadItems[item]
              newItem.progress = event.loaded / event.total * 100
              ldUpload.updateUploadItem(newItem)
            }
          });
          xhr.addEventListener("loadend", () => {
            resolve(xhr.readyState === 4 && xhr.status === 200)
          })
          ldUpload.addEventListener('lduploaditemremove', async (ev) => {
            uploadItem = ev.detail
            if (uploadItem.fileName === uploadItems[item].fileName) {
              newItem = uploadItems[item]
              newItem.state = 'cancelled'
              ldUpload.updateUploadItem(newItem)
              xhr.abort(ev.detail.file)
            }
          })
          xhr.open("PUT", "https://httpbin.org/put", true)
          xhr.setRequestHeader("Content-Type", "application/octet-stream")
          xhr.send(file)
        })
        if (success) {
          newItem = uploadItems[item]
        newItem.state = 'uploaded'
        ldUpload.updateUploadItem(newItem)
        } else if (uploadItems[item].state != 'cancelled') {
          newItem = uploadItems[item]
        newItem.state = "upload failed"
        ldUpload.updateUploadItem(newItem)
        }
      }
    })

    ldUpload.addEventListener('lduploaditemdownload', async (ev) => {
      uploadItem = ev.detail
      window.open("https://liquid.merck.design/liquid/")
    })

    ldUpload.addEventListener('lduploaditemretry', async (ev) => {
      uploadItem = ev.detail
      uploadItems = []
      uploadItems.push(uploadItem)
      event = new CustomEvent('ldfileuploadready', { detail: uploadItems });
      ldUpload.dispatchEvent(event)
    })

    // ldUpload.addEventListener('lduploaditemremove', async (ev) => {
    //   uploadItem = ev.detail
    //   /* ldUpload.deleteUploadItem(uploadItem) */
    //   uploadItem.state = 'cancelled'
    //   ldUpload.updateUploadItem(uploadItem)
    //   xhr.abort(ev.detail.file)
    // })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
multiple
show-progress
start-upload-immediately

<!-- add width -->

onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}

            const file = uploadItems[item].file

            const xhr = new XMLHttpRequest()
            const success = await new Promise((resolve) => {
              xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                  const newItem = uploadItems[item]
                  newItem.progress = (event.loaded / event.total) * 100
                  if (fileUploadRef.current) {
                    fileUploadRef.current.updateUploadItem(newItem)
                  }
                }
              })
              xhr.addEventListener('loadend', () => {
                resolve(xhr.readyState === 4 && xhr.status === 200)
              })

              if (fileUploadRef.current) {
                fileUploadRef.current.addEventListener(
                  'lduploaditemremove',
                  async (ev) => {
                    const uploadItem = ev.detail
                    if (uploadItem.fileName === uploadItems[item].fileName) {
                      const newItem = uploadItems[item]
                      newItem.state = 'cancelled'
                      fileUploadRef.current.updateUploadItem(newItem)
                      xhr.abort(ev.detail.file)
                    }
                  }
                )
              }

              xhr.open('PUT', 'https://httpbin.org/put', true)
              xhr.setRequestHeader('Content-Type', 'application/octet-stream')
              xhr.send(file)
            })
            const success2 = Math.floor(Math.random() * 2) === 1 ? true : false
            if (success2) {
              const newItem = uploadItems[item]
              newItem.state = 'uploaded'
              if (fileUploadRef.current) {
                fileUploadRef.current.updateUploadItem(newItem)
              }
            } else if (uploadItems[item].state != 'cancelled') {
              const newItem = uploadItems[item]
              newItem.state = 'upload failed'
              if (fileUploadRef.current) {
                fileUploadRef.current.updateUploadItem(newItem)
              }
            }
          }
        }}
        onLduploaditemdownload={async () => {
          window.open('https://liquid.merck.design/liquid/')
        }}
        onLduploaditemretry={async (ev) => {
          const uploadItem = ev.detail
          const uploadItems = []
          uploadItems.push(uploadItem)
          const uploadevent = new CustomEvent('ldfileuploadready', {
            detail: uploadItems,
          })
          if (fileUploadRef.current) {
            fileUploadRef.current.dispatchEvent(uploadevent)
          }
        }}
        onLduploaditemremove={async (ev) => {
          const uploadItem = ev.detail
          uploadItem.state = 'cancelled'
          if (fileUploadRef.current) {
            fileUploadRef.current.updateUploadItem(uploadItem)
          }
        }}
        onLduploaditemdelete={async (ev) => {
          const uploadItem = ev.detail
          if (fileUploadRef.current) {
            fileUploadRef.current.deleteUploadItem(uploadItem)
          }
        }}
      />

<!-- CSS component -->

{% endexample %}

#### Upload with XMLHttpRequest with circular progress

{% example '{ "opened": false }' %}
<ld-file-upload multiple show-progress circular-progress style="width: 30rem">
</ld-file-upload>

<!-- style="width: 30rem, height: 50rem"> -->

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        ldUpload.updateUploadItem(newItem)
        file = uploadItems[item].file

        const xhr = new XMLHttpRequest()
        const success = await new Promise((resolve) => {
          xhr.upload.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
              newItem = uploadItems[item]
              newItem.progress = event.loaded / event.total * 100
              ldUpload.updateUploadItem(newItem)
            }
          });
          xhr.addEventListener("loadend", () => {
            resolve(xhr.readyState === 4 && xhr.status === 200)
          })
          ldUpload.addEventListener('lduploaditemremove', async (ev) => {
            uploadItem = ev.detail
            if (uploadItem.fileName === uploadItems[item].fileName) {
              newItem = uploadItems[item]
              newItem.state = 'cancelled'
              ldUpload.updateUploadItem(newItem)
              xhr.abort(ev.detail.file)
            }
          })
          xhr.open("PUT", "https://httpbin.org/put", true)
          xhr.setRequestHeader("Content-Type", "application/octet-stream")
          xhr.send(file)
        })
        if (success) {
          newItem = uploadItems[item]
        newItem.state = 'uploaded'
        ldUpload.updateUploadItem(newItem)
        } else if (uploadItems[item].state != 'cancelled') {
          newItem = uploadItems[item]
        newItem.state = "upload failed"
        ldUpload.updateUploadItem(newItem)
        }
      }
    })

    ldUpload.addEventListener('lduploaditemdownload', async (ev) => {
      uploadItem = ev.detail
      window.open("https://liquid.merck.design/liquid/")
    })

    ldUpload.addEventListener('lduploaditemretry', async (ev) => {
      uploadItem = ev.detail
      uploadItems = []
      uploadItems.push(uploadItem)
      event = new CustomEvent('ldfileuploadready', { detail: uploadItems });
      ldUpload.dispatchEvent(event)
    })

    // ldUpload.addEventListener('lduploaditemremove', async (ev) => {
    //   uploadItem = ev.detail
    //   /* ldUpload.deleteUploadItem(uploadItem) */
    //   uploadItem.state = 'cancelled'
    //   ldUpload.updateUploadItem(uploadItem)
    //   xhr.abort(ev.detail.file)
    // })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
multiple
show-progress
circular-progress

<!-- add width -->

onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}

            const file = uploadItems[item].file

            const xhr = new XMLHttpRequest()
            const success = await new Promise((resolve) => {
              xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                  const newItem = uploadItems[item]
                  newItem.progress = (event.loaded / event.total) * 100
                  if (fileUploadRef.current) {
                    fileUploadRef.current.updateUploadItem(newItem)
                  }
                }
              })
              xhr.addEventListener('loadend', () => {
                resolve(xhr.readyState === 4 && xhr.status === 200)
              })

              if (fileUploadRef.current) {
                fileUploadRef.current.addEventListener(
                  'lduploaditemremove',
                  async (ev) => {
                    const uploadItem = ev.detail
                    if (uploadItem.fileName === uploadItems[item].fileName) {
                      const newItem = uploadItems[item]
                      newItem.state = 'cancelled'
                      fileUploadRef.current.updateUploadItem(newItem)
                      xhr.abort(ev.detail.file)
                    }
                  }
                )
              }

              xhr.open('PUT', 'https://httpbin.org/put', true)
              xhr.setRequestHeader('Content-Type', 'application/octet-stream')
              xhr.send(file)
            })
            const success2 = Math.floor(Math.random() * 2) === 1 ? true : false
            if (success2) {
              const newItem = uploadItems[item]
              newItem.state = 'uploaded'
              if (fileUploadRef.current) {
                fileUploadRef.current.updateUploadItem(newItem)
              }
            } else if (uploadItems[item].state != 'cancelled') {
              const newItem = uploadItems[item]
              newItem.state = 'upload failed'
              if (fileUploadRef.current) {
                fileUploadRef.current.updateUploadItem(newItem)
              }
            }
          }
        }}
        onLduploaditemdownload={async () => {
          window.open('https://liquid.merck.design/liquid/')
        }}
        onLduploaditemretry={async (ev) => {
          const uploadItem = ev.detail
          const uploadItems = []
          uploadItems.push(uploadItem)
          const uploadevent = new CustomEvent('ldfileuploadready', {
            detail: uploadItems,
          })
          if (fileUploadRef.current) {
            fileUploadRef.current.dispatchEvent(uploadevent)
          }
        }}
        onLduploaditemremove={async (ev) => {
          const uploadItem = ev.detail
          uploadItem.state = 'cancelled'
          if (fileUploadRef.current) {
            fileUploadRef.current.updateUploadItem(uploadItem)
          }
        }}
        onLduploaditemdelete={async (ev) => {
          const uploadItem = ev.detail
          if (fileUploadRef.current) {
            fileUploadRef.current.deleteUploadItem(uploadItem)
          }
        }}
      />

<!-- CSS component -->

{% endexample %}

#### Upload with XMLHttpRequest with allow pause

{% example '{ "opened": false }' %}
<ld-file-upload multiple show-progress allow-pause style="width: 30rem">
</ld-file-upload>

<!-- style="width: 30rem, height: 50rem"> -->

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        ldUpload.updateUploadItem(newItem)
        file = uploadItems[item].file

        const xhr = new XMLHttpRequest()
        const success = await new Promise((resolve) => {
          xhr.upload.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
              newItem = uploadItems[item]
              newItem.progress = event.loaded / event.total * 100
              ldUpload.updateUploadItem(newItem)
            }
          });
          xhr.addEventListener("loadend", () => {
            resolve(xhr.readyState === 4 && xhr.status === 200)
          })
          ldUpload.addEventListener('lduploaditemremove', async (ev) => {
            uploadItem = ev.detail
            if (uploadItem.fileName === uploadItems[item].fileName) {
              newItem = uploadItems[item]
              newItem.state = 'cancelled'
              ldUpload.updateUploadItem(newItem)
              xhr.abort(ev.detail.file)
            }
          })
          xhr.open("PUT", "https://httpbin.org/put", true)
          xhr.setRequestHeader("Content-Type", "application/octet-stream")
          xhr.send(file)
        })
        if (success) {
          newItem = uploadItems[item]
        newItem.state = 'uploaded'
        ldUpload.updateUploadItem(newItem)
        } else if (uploadItems[item].state != 'cancelled') {
          newItem = uploadItems[item]
        newItem.state = "upload failed"
        ldUpload.updateUploadItem(newItem)
        }
      }
    })

    ldUpload.addEventListener('lduploaditemdownload', async (ev) => {
      uploadItem = ev.detail
      window.open("https://liquid.merck.design/liquid/")
    })

    ldUpload.addEventListener('lduploaditemretry', async (ev) => {
      uploadItem = ev.detail
      uploadItems = []
      uploadItems.push(uploadItem)
      event = new CustomEvent('ldfileuploadready', { detail: uploadItems });
      ldUpload.dispatchEvent(event)
    })


    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
multiple
show-progress
allow-pause

<!-- add width -->

onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}

            const file = uploadItems[item].file

            const xhr = new XMLHttpRequest()
            const success = await new Promise((resolve) => {
              xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                  const newItem = uploadItems[item]
                  newItem.progress = (event.loaded / event.total) * 100
                  if (fileUploadRef.current) {
                    fileUploadRef.current.updateUploadItem(newItem)
                  }
                }
              })
              xhr.addEventListener('loadend', () => {
                resolve(xhr.readyState === 4 && xhr.status === 200)
              })

              if (fileUploadRef.current) {
                fileUploadRef.current.addEventListener(
                  'lduploaditemremove',
                  async (ev) => {
                    const uploadItem = ev.detail
                    if (uploadItem.fileName === uploadItems[item].fileName) {
                      const newItem = uploadItems[item]
                      newItem.state = 'cancelled'
                      fileUploadRef.current.updateUploadItem(newItem)
                      xhr.abort(ev.detail.file)
                    }
                  }
                )
              }

              xhr.open('PUT', 'https://httpbin.org/put', true)
              xhr.setRequestHeader('Content-Type', 'application/octet-stream')
              xhr.send(file)
            })
            if (success) {
              const newItem = uploadItems[item]
              newItem.state = 'uploaded'
              if (fileUploadRef.current) {
                fileUploadRef.current.updateUploadItem(newItem)
              }
            } else if (uploadItems[item].state != 'cancelled') {
              const newItem = uploadItems[item]
              newItem.state = 'upload failed'
              if (fileUploadRef.current) {
                fileUploadRef.current.updateUploadItem(newItem)
              }
            }
          }
        }}
        onLduploaditemdownload={async () => {
          window.open('https://liquid.merck.design/liquid/')
        }}
        onLduploaditemretry={async (ev) => {
          const uploadItem = ev.detail
          const uploadItems = []
          uploadItems.push(uploadItem)
          const uploadevent = new CustomEvent('ldfileuploadready', {
            detail: uploadItems,
          })
          if (fileUploadRef.current) {
            fileUploadRef.current.dispatchEvent(uploadevent)
          }
        }}
        onLduploaditemremove={async (ev) => {
          const uploadItem = ev.detail
          uploadItem.state = 'cancelled'
          if (fileUploadRef.current) {
            fileUploadRef.current.updateUploadItem(uploadItem)
          }
        }}
        onLduploaditemdelete={async (ev) => {
          const uploadItem = ev.detail
          if (fileUploadRef.current) {
            fileUploadRef.current.deleteUploadItem(uploadItem)
          }
        }}
      />

<!-- CSS component -->

{% endexample %}

#### Fake Upload

Fake upload, just for testing. Can be removed from the documentation.

{% example '{ "opened": false }' %}
<ld-file-upload multiple>
</ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }

      const files = ev.detail[0].file

      const data = new FormData()

      for (let i = 0; i < ev.detail.length; i++) {
        data.append('userfile', ev.detail[i].file, ev.detail[i].file.name)
      }

      for (const value of data.values()) {
        }

      const requestOptions = {
        method: 'POST',
        body: data,
      }
      const delay = ms => new Promise(res => setTimeout(res, ms));
      try {
        await fetch(/* 'https://api.escuelajs.co/api/v1/files/upload' */ 'https://v2.convertapi.com/upload' , {
          method: 'POST',
          body: data,
        })
        // Fake progress, the file is being uploaded but the progress simulated here does not represent the actual progress
        for (const value of data.values()) {
          await delay(1000)
          updatedItem = uploadItems.find((item) => item.fileName === value.name)
          updatedItem.state = 'uploaded'
          updatedItem.progress = 100
          uploadingItems.push(updatedItem)
          ldUpload.updateUploadItem(updatedItem)
          }
      } catch (err) {
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

<!-- CSS component -->

{% endexample %}

### Circular progress

Mode in which only a circular progress representation of the total upload progress is shown instead of separate progress items for all files.

{% example '{ "opened": false }' %}
<ld-file-upload multiple circular-progress>
</ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
multiple
circular-progress
onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLduploaditemremove={async (ev) => {
const uploadItem = ev.detail
uploadItem.state = 'cancelled'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(uploadItem)
}
}}
onLduploaditemdelete={async (ev) => {
const uploadItem = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.deleteUploadItem(uploadItem)
}
}}
/>

<!-- CSS component -->

{% endexample %}

#### Circular progress with max file size

{% example '{ "opened": false }' %}
<ld-file-upload multiple circular-progress max-file-size=500>
</ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
multiple
circular-progress
max-file-size="500"
onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLduploaditemremove={async (ev) => {
const uploadItem = ev.detail
uploadItem.state = 'cancelled'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(uploadItem)
}
}}
onLduploaditemdelete={async (ev) => {
const uploadItem = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.deleteUploadItem(uploadItem)
}
}}
/>

<!-- CSS component -->

{% endexample %}

### Start upload immediately after choosing files

In `start-upload-immediately` mode, upload of files will start immediately after the files are chosen.

{% example '{ "opened": false }' %}
<ld-file-upload start-upload-immediately></ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
start-upload-immediately
onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLduploaditemremove={async (ev) => {
const uploadItem = ev.detail
uploadItem.state = 'cancelled'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(uploadItem)
}
}}
onLduploaditemdelete={async (ev) => {
const uploadItem = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.deleteUploadItem(uploadItem)
}
}}
/>

<!-- CSS component -->

{% endexample %}

#### Start upload immediately after choosing files with max file size

{% example '{ "opened": false }' %}
<ld-file-upload start-upload-immediately max-file-size=500></ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
start-upload-immediately
max-file-size="500"
onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLduploaditemremove={async (ev) => {
const uploadItem = ev.detail
uploadItem.state = 'cancelled'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(uploadItem)
}
}}
onLduploaditemdelete={async (ev) => {
const uploadItem = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.deleteUploadItem(uploadItem)
}
}}
/>

<!-- CSS component -->

{% endexample %}

### Compact

{% example '{ "opened": false }' %}
<ld-file-upload start-upload-immediately compact>
</ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
start-upload-immediately
compact
onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLduploaditemremove={async (ev) => {
const uploadItem = ev.detail
uploadItem.state = 'cancelled'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(uploadItem)
}
}}
onLduploaditemdelete={async (ev) => {
const uploadItem = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.deleteUploadItem(uploadItem)
}
}}
/>

<!-- CSS component -->

{% endexample %}

### Allow pause

In `allow-pause` mode, the upload of all files can be paused (and continued) on pause all files click.

{% example '{ "opened": false }' %}
<ld-file-upload allow-pause>
</ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })

    ldUpload.addEventListener('ldfileuploadpausealluploads', async (ev) => {
      uploadItems = ev.detail
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'paused'
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('ldfileuploadcontinueuploads', async (ev) => {
      uploadItems = ev.detail
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        ldUpload.updateUploadItem(newItem)
      }
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
allow-pause
onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLduploaditemremove={async (ev) => {
const uploadItem = ev.detail
uploadItem.state = 'cancelled'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(uploadItem)
}
}}
onLduploaditemdelete={async (ev) => {
const uploadItem = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.deleteUploadItem(uploadItem)
}
}}

onLdfileuploadpausealluploads={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'paused'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLdfileuploadcontinueuploads={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
/>

<!-- CSS component -->

{% endexample %}

### Show progress

In `show-progress` mode, a progress bar representing the upload progress of a file will be shown.

{% example '{ "opened": false }' %}
<ld-file-upload show-progress>
</ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
show-progress
onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLduploaditemremove={async (ev) => {
const uploadItem = ev.detail
uploadItem.state = 'cancelled'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(uploadItem)
}
}}
onLduploaditemdelete={async (ev) => {
const uploadItem = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.deleteUploadItem(uploadItem)
}
}}
/>

<!-- CSS component -->

{% endexample %}

### Select multiple

{% example '{ "opened": false }' %}
<ld-file-upload multiple>
</ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
multiple
onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLduploaditemremove={async (ev) => {
const uploadItem = ev.detail
uploadItem.state = 'cancelled'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(uploadItem)
}
}}
onLduploaditemdelete={async (ev) => {
const uploadItem = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.deleteUploadItem(uploadItem)
}
}}
/>

<!-- CSS component -->

{% endexample %}

### Max file size

{% example '{ "opened": false }' %}
<ld-file-upload max-file-size=500>
</ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
max-file-size="500"
onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLduploaditemremove={async (ev) => {
const uploadItem = ev.detail
uploadItem.state = 'cancelled'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(uploadItem)
}
}}
onLduploaditemdelete={async (ev) => {
const uploadItem = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.deleteUploadItem(uploadItem)
}
}}
/>

<!-- CSS component -->

{% endexample %}

#### Max file size with custom text

{% example '{ "opened": false }' %}
<ld-file-upload max-file-size=500 label-upload-constraints='File size must be smaller than $maxFileSize'>
</ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

const fileUploadRef = useRef<HTMLLdFileUploadElement>(null)

<LdFileUpload
ref={fileUploadRef}
max-file-size="500"
label-upload-constraints='File size must be smaller than $maxFileSize'
onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLduploaditemremove={async (ev) => {
const uploadItem = ev.detail
uploadItem.state = 'cancelled'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(uploadItem)
}
}}
onLduploaditemdelete={async (ev) => {
const uploadItem = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.deleteUploadItem(uploadItem)
}
}}
/>

<!-- CSS component -->

{% endexample %}

### Custom icons

Custom icons for specific file types can be added to the icons slot.

{% example '{ "opened": false }' %}
<ld-file-upload>

<ld-icon slot='icons' data-upload-icon='application/pdf' name='pdf' size='lg'></ld-icon>
<img slot='icons' src='{{ env.base }}/{{ buildstamp }}assets/examples/file-upload-jpeg.svg' data-upload-icon='image/jpeg' />

<!-- <ld-icon data-upload-icon='text/rtf' name='placeholder'></ld-icon> -->
<!-- <img slot='icons' src='{{ env.base }}/{{ buildstamp }}assets/examples/file-upload-jpeg.svg' data-upload-icon='text/rtf' /> -->
</ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })

    ldUpload.addEventListener('ldfileuploadpausealluploads', async (ev) => {
      uploadItems = ev.detail
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'paused'
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('ldfileuploadcontinueuploads', async (ev) => {
      uploadItems = ev.detail
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        ldUpload.updateUploadItem(newItem)
      }
    })
  })()
</script>

<!-- React component -->

<LdFileUpload
ref={fileUploadRef}
onLdchoosefiles={async (ev) => {
const uploadItems = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.addUploadItems(uploadItems)
}
}}
onLdfileuploadready={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLduploaditemremove={async (ev) => {
const uploadItem = ev.detail
uploadItem.state = 'cancelled'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(uploadItem)
}
}}
onLduploaditemdelete={async (ev) => {
const uploadItem = ev.detail
if (fileUploadRef.current) {
fileUploadRef.current.deleteUploadItem(uploadItem)
}
}}

onLdfileuploadpausealluploads={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'paused'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}}
onLdfileuploadcontinueuploads={async (ev) => {
const uploadItems = ev.detail
for (const item in uploadItems) {
const newItem = uploadItems[item]
newItem.state = 'uploading'
if (fileUploadRef.current) {
fileUploadRef.current.updateUploadItem(newItem)
}
}
}} >
<LdIcon
          slot="icons"
          data-upload-icon="application/pdf"
          name="pdf"
          size="lg"
        ></LdIcon>
<img
          slot="icons"
          src="{{ env.base }}/{{ buildstamp }}assets/examples/file-upload-jpeg.svg"
          data-upload-icon="image/jpeg"
        />
</LdFileUpload>

<!-- CSS component -->

{% endexample %}

### German

Example for changing the language of the component to German by using the test labels.

{% example '{ "opened": false }' %}
<ld-file-upload max-file-size=500
label-drag-instructions="Dateien hierher ziehen oder auswählen"
label-upload-constraints="max. Dateigröße: $maxFileSize"
label-select-file="Dateien auswählen"
label-upload-file="Dateien hochladen"
label-upload-state="Upload Status:"
label-upload-count="$filesUploaded von $filesTotal Dateien wurden hochgeladen."
label-upload-percentage="$uploadProgress % hochgeladen."
label-start-upload="Upload beginnen"
label-uploading="Dateien werden hochgeladen"
label-upload-completed="Upload abgeschlossen"
label-delete-all-files="Alle Dateien löschen"
label-pause-all-uploads="Alle Uploads pausieren"
label-continue-paused-uploads="Pausierte Uploads fortführen"
label-error-header="Ein Fehler ist aufgetreten"
label-file-already-chosen-error="$duplicateFiles können nicht ausgewählt werden, da Dateien mit den gleichen Namen bereits ausgewählt wurden. Um diese Dateien dennoch hochzuladen müssen die Dateien mit den gleichen Namen entfernt werden."
label-max-file-size-exceeded-error="$filesExceedingmaxFileSize können nicht ausgewählt werden, da die Dateien die maximale Dateigröße überschreiten."
label-c-p-upload-count="$filesUploading Dateien werden hochgeladen"
label-c-p-uploaded-size="$uploadedSize hochgeladen..."
label-c-p-cancel="Abbrechen"
label-remove="Entfernen"
label-download="Herunterladen"
label-retry="Erneut versuchen"
label-delete="Löschen">
</ld-file-upload>

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })

    ldUpload.addEventListener('ldfileuploadpausealluploads', async (ev) => {
      uploadItems = ev.detail
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'paused'
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('ldfileuploadcontinueuploads', async (ev) => {
      uploadItems = ev.detail
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        ldUpload.updateUploadItem(newItem)
      }
    })
  })()
</script>

<!-- React component -->

<!-- CSS component -->

{% endexample %}

### Combined examples

{% example '{ "opened": false }' %}
<ld-file-upload allow-pause multiple icons='{"rtf": "{{ env.base }}/{{ buildstamp }}assets/examples/file-upload-jpeg.svg"}'>

<ld-icon slot='icons' data-upload-icon='application/pdf' name='pdf' size='lg'></ld-icon>

<!-- <ld-icon data-upload-icon='text/rtf' name='placeholder'></ld-icon> -->
<img slot='icons' src='{{ env.base }}/{{ buildstamp }}assets/examples/file-upload-jpeg.svg' data-upload-icon='text/rtf' />
</ld-file-upload>

<!-- style="width: 30rem" -->

<script>
  ;(() => {
    const ldUpload = document.currentScript.previousElementSibling

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })

    ldUpload.addEventListener('ldfileuploadpausealluploads', async (ev) => {
      uploadItems = ev.detail
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'paused'
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('ldfileuploadcontinueuploads', async (ev) => {
      uploadItems = ev.detail
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        ldUpload.updateUploadItem(newItem)
      }
    })
  })()
</script>

<!-- React component -->

<!-- CSS component -->

{% endexample %}

### Examples with mock files

#### Default example with mock files

{% example '{ "opened": false }' %}
<ld-file-upload show-progress>
</ld-file-upload>

<ld-button>Click</ld-button>

<script>
  ;(() => {
    const button = document.currentScript.previousElementSibling
    const ldUpload = button.previousElementSibling
    button.addEventListener('click', async (ev) => {
      const fileList = [
        {
          state: 'uploading',
          fileName: 'file1.png',
          fileSize: 100000,
          fileType: 'png',
          progress: 50,
          file: undefined,
        },
        {
          state: 'uploading',
          fileName: 'file2.png',
          fileSize: 200000,
          fileType: 'png',
          progress: 3,
          file: undefined,
        },
        {
          state: 'pending',
          fileName: 'file3.pdf',
          fileSize: 100000,
          fileType: 'pdf',
          progress: 0,
          file: undefined,
        },
        {
          state: 'uploaded',
          fileName: 'file4.jpeg',
          fileSize: 100000,
          fileType: 'image/jpeg',
          progress: 100,
          file: undefined,
        },
        {
          state: 'upload failed',
          fileName: 'file5.txt',
          fileSize: 100000,
          fileType: 'txt',
          progress: 75,
          file: undefined,
        },
      ]
      event = new CustomEvent('ldchoosefiles', { detail: fileList });
      ldUpload.dispatchEvent(event)
      // event = new CustomEvent('ldfileuploadready', { detail: fileList });
      // ldUpload.dispatchEvent(event)
    })

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

<!-- CSS component -->

{% endexample %}

#### Example with mock progress

{% example '{ "opened": false }' %}
<ld-file-upload show-progress start-upload-immediately>
</ld-file-upload>

<ld-button>Click</ld-button>

<script>
  ;(() => {
    const button = document.currentScript.previousElementSibling
    const ldUpload = button.previousElementSibling
    button.addEventListener('click', async (ev) => {
      const fileList = [
        {
          state: 'pending',
          fileName: 'file1.png',
          fileSize: 100000,
          fileType: 'png',
          progress: 0,
          file: undefined,
        },
        {
          state: 'pending',
          fileName: 'file2.png',
          fileSize: 200000,
          fileType: 'png',
          progress: 0,
          file: undefined,
        },
        {
          state: 'pending',
          fileName: 'file3.pdf',
          fileSize: 100000,
          fileType: 'pdf',
          progress: 0,
          file: undefined,
        },
        {
          state: 'pending',
          fileName: 'file4.jpeg',
          fileSize: 100000,
          fileType: 'image/jpeg',
          progress: 0,
          file: undefined,
        },
        {
          state: 'pending',
          fileName: 'file5.txt',
          fileSize: 100000,
          fileType: 'txt',
          progress: 0,
          file: undefined,
        },
      ]
      event = new CustomEvent('ldchoosefiles', { detail: fileList });
      ldUpload.dispatchEvent(event)
      event = new CustomEvent('ldfileuploadready', { detail: fileList });
      ldUpload.dispatchEvent(event)
    })

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))
        for (let i = 0; i < 100; i=i+10) {
          newItem.progress = i 
          uploadingItems.push(newItem)
          ldUpload.updateUploadItem(newItem)
          await delay(200)
        }
        newItem.state = 'uploaded'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

<!-- CSS component -->

{% endexample %}

#### Circular progress example with mock files

{% example '{ "opened": false }' %}
<ld-file-upload circular-progress>
</ld-file-upload>

<ld-button>Click</ld-button>

<script>
  ;(() => {
    const button = document.currentScript.previousElementSibling
    const ldUpload = button.previousElementSibling
    button.addEventListener('click', async (ev) => {
      const fileList = [
        {
          state: 'uploading',
          fileName: 'file1.png',
          fileSize: 100000,
          fileType: 'png',
          progress: 50,
          file: undefined,
        },
        {
          state: 'uploading',
          fileName: 'file2.png',
          fileSize: 200000,
          fileType: 'png',
          progress: 3,
          file: undefined,
        },
        {
          state: 'pending',
          fileName: 'file3.pdf',
          fileSize: 100000,
          fileType: 'pdf',
          progress: 0,
          file: undefined,
        },
        {
          state: 'uploaded',
          fileName: 'file4.jpeg',
          fileSize: 100000,
          fileType: 'image/jpeg',
          progress: 100,
          file: undefined,
        },
        {
          state: 'upload failed',
          fileName: 'file5.txt',
          fileSize: 100000,
          fileType: 'txt',
          progress: 75,
          file: undefined,
        },
      ]
      event = new CustomEvent('ldchoosefiles', { detail: fileList });
      ldUpload.dispatchEvent(event)
      event = new CustomEvent('ldfileuploadready', { detail: fileList });
      ldUpload.dispatchEvent(event)
    })

    ldUpload.addEventListener('ldchoosefiles', async (ev) => {
      uploadItems = ev.detail
      ldUpload.addUploadItems(uploadItems)
    })

    ldUpload.addEventListener('ldfileuploadready', async (ev) => {
      uploadItems = ev.detail
      uploadingItems = []
      for (let item in uploadItems) {
        newItem = uploadItems[item]
        newItem.state = 'uploading'
        uploadingItems.push(newItem)
        ldUpload.updateUploadItem(newItem)
      }
    })

    ldUpload.addEventListener('lduploaditemremove', async (ev) => {
      uploadItem = ev.detail
      uploadItem.state = 'cancelled'
      ldUpload.updateUploadItem(uploadItem)
    })

    ldUpload.addEventListener('lduploaditemdelete', async (ev) => {
      uploadItem = ev.detail
      ldUpload.deleteUploadItem(uploadItem)
    })
  })()
</script>

<!-- React component -->

<!-- CSS component -->

{% endexample %}

<!-- Auto Generated Below -->


## Overview

File upload:
  - listen for files chosen event (from ld-choose-file.tsx) with file list
    -> emit upload ready event (if startUploadImmediately prop is set to true)
  - listen for click event of continue button and emit upload ready event (if startUploadImmediately prop is set to false)
  - The upload ready event contains the file list as its payload

## Properties

| Property                        | Attribute                           | Description                                                                                                                                                                                                    | Type      | Default                                                                                                                                                                              |
| ------------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `allowPause`                    | `allow-pause`                       | Defines whether the user will be able to pause uploads.                                                                                                                                                        | `boolean` | `false`                                                                                                                                                                              |
| `circularProgress`              | `circular-progress`                 | Defines whether only the circular progress indicator will be shown during upload.                                                                                                                              | `boolean` | `false`                                                                                                                                                                              |
| `compact`                       | `compact`                           | Defines whether only one file can be chosen and uploaded.                                                                                                                                                      | `boolean` | `false`                                                                                                                                                                              |
| `dirname`                       | `dirname`                           | Name of form field to use for sending the element's directionality in form submission.                                                                                                                         | `string`  | `undefined`                                                                                                                                                                          |
| `form`                          | `form`                              | Associates the control with a form element.                                                                                                                                                                    | `string`  | `undefined`                                                                                                                                                                          |
| `labelCPCancel`                 | `label-c-p-cancel`                  | Label to be used for the cancel button in circular progress mode.                                                                                                                                              | `string`  | ``Cancel``                                                                                                                                                                           |
| `labelCPUploadCount`            | `label-c-p-upload-count`            | Label to be used to count th uploaded files in circular progress mode.                                                                                                                                         | `string`  | ``Uploading $filesUploading file${     this.multiple ? 's' : ''   }``                                                                                                                |
| `labelCPUploadedSize`           | `label-c-p-uploaded-size`           | Label to be used to show the total uploaded file size in circular progress mode.                                                                                                                               | `string`  | ``$uploadedSize uploaded...``                                                                                                                                                        |
| `labelContinuePausedUploads`    | `label-continue-paused-uploads`     | Label to be used for the continue paused uploads button.                                                                                                                                                       | `string`  | ``Continue paused uploads``                                                                                                                                                          |
| `labelDelete`                   | `label-delete`                      | Label to be used for the delete button.                                                                                                                                                                        | `string`  | ``Delete``                                                                                                                                                                           |
| `labelDeleteAllFiles`           | `label-delete-all-files`            | Label to be used for the delete all files button.                                                                                                                                                              | `string`  | ``Delete all files``                                                                                                                                                                 |
| `labelDownload`                 | `label-download`                    | Label to be used for the download button.                                                                                                                                                                      | `string`  | ``Download``                                                                                                                                                                         |
| `labelDragInstructions`         | `label-drag-instructions`           | Label to be used as a header with instructions for drag and drop or file upload.                                                                                                                               | `string`  | ``Drag your file${     this.multiple ? '(s)' : ''   } here or browse``                                                                                                               |
| `labelErrorHeader`              | `label-error-header`                | Label to be used for the header of error messages.                                                                                                                                                             | `string`  | ``An error occurred``                                                                                                                                                                |
| `labelFileAlreadyChosenError`   | `label-file-already-chosen-error`   | Label to be used for the error message that is shown if a file that has already been chosen is selected again.                                                                                                 | `string`  | ``$duplicateFiles cannot be chosen since file(s) with the same name(s) has/have been chosen already. To upload this/these file(s) please remove the file(s) with the same name(s).`` |
| `labelPauseAllUploads`          | `label-pause-all-uploads`           | Label to be used for the pause all uploads button.                                                                                                                                                             | `string`  | ``Pause all uploads``                                                                                                                                                                |
| `labelRemove`                   | `label-remove`                      | Label to be used for the remove button.                                                                                                                                                                        | `string`  | ``Remove``                                                                                                                                                                           |
| `labelRetry`                    | `label-retry`                       | Label to be used for the retry button.                                                                                                                                                                         | `string`  | ``Retry``                                                                                                                                                                            |
| `labelSelectFile`               | `label-select-file`                 | Label to be used for the select files button.                                                                                                                                                                  | `string`  | ``Select ${this.multiple ? '' : 'a'} file${     this.multiple ? '(s)' : ''   }``                                                                                                     |
| `labelStartUpload`              | `label-start-upload`                | Label to be used for the start upload button.                                                                                                                                                                  | `string`  | ``Start upload``                                                                                                                                                                     |
| `labelUploadCancelledMsg`       | `label-upload-cancelled-msg`        | Label to be used for upload cancelled message.                                                                                                                                                                 | `string`  | ``Upload of this file has been cancelled``                                                                                                                                           |
| `labelUploadCompleted`          | `label-upload-completed`            | Label to be used for the (disabled) upload completed button.                                                                                                                                                   | `string`  | ``Upload completed``                                                                                                                                                                 |
| `labelUploadConstraints`        | `label-upload-constraints`          | Label to be used to describe upload constraints like the maximum file size.                                                                                                                                    | `string`  | ``${     this.maxFileSize !== undefined ? 'max. $maxFileSize file size' : ''   }``                                                                                                   |
| `labelUploadCount`              | `label-upload-count`                | Label to be used to count the amount of files that have been uploaded.                                                                                                                                         | `string`  | ``$filesUploaded of $filesTotal file${     this.multiple ? 's' : ''   } uploaded.``                                                                                                  |
| `labelUploadErrorMsg`           | `label-upload-error-msg`            | Label to be used for upload error message.                                                                                                                                                                     | `string`  | ``Error! Upload was unsuccessful``                                                                                                                                                   |
| `labelUploadFile`               | `label-upload-file`                 | Label to be used for the upload files button.                                                                                                                                                                  | `string`  | ``Upload ${this.multiple ? '' : 'a'} file${     this.multiple ? '(s)' : ''   }``                                                                                                     |
| `labelUploadPercentage`         | `label-upload-percentage`           | Label to be used to show the total upload percentage.                                                                                                                                                          | `string`  | ``$uploadProgress % uploaded.``                                                                                                                                                      |
| `labelUploadState`              | `label-upload-state`                | Label to be used for the upload state header.                                                                                                                                                                  | `string`  | ``Upload state:``                                                                                                                                                                    |
| `labelUploadSuccessMsg`         | `label-upload-success-msg`          | Label to be used for upload success message.                                                                                                                                                                   | `string`  | ``Upload was successful!``                                                                                                                                                           |
| `labelUploading`                | `label-uploading`                   | Label to be used for the (disabled) uploading button.                                                                                                                                                          | `string`  | ``Uploading``                                                                                                                                                                        |
| `labelmaxFileSizeExceededError` | `labelmax-file-size-exceeded-error` | Label to be used for the error message that is shown if chosen file exceeds the maximum file size.                                                                                                             | `string`  | ``$filesExceedingmaxFileSize cannot be chosen since the file(s) exceed(s) the maximum file size.``                                                                                   |
| `maxFileSize`                   | `max-file-size`                     | Is used to display and validate maximum file size in Bytes                                                                                                                                                     | `number`  | `undefined`                                                                                                                                                                          |
| `multiple`                      | `multiple`                          | Defines whether selection of multiple input files is allowed.                                                                                                                                                  | `boolean` | `false`                                                                                                                                                                              |
| `name`                          | `name`                              | Used to specify the name of the control.                                                                                                                                                                       | `string`  | `undefined`                                                                                                                                                                          |
| `ref`                           | `ref`                               | reference to component                                                                                                                                                                                         | `any`     | `undefined`                                                                                                                                                                          |
| `showProgress`                  | `show-progress`                     | Defines whether the progress of uploading files will be shown, or only an uploading indicator. Also defines is exact progress will be shown in uploading progress button, as well as in the upload state area. | `boolean` | `false`                                                                                                                                                                              |
| `startUploadImmediately`        | `start-upload-immediately`          | Defines whether upload starts immediately after choosing files or after confirmation.                                                                                                                          | `boolean` | `false`                                                                                                                                                                              |
| `value`                         | `value`                             | The input value.                                                                                                                                                                                               | `string`  | `undefined`                                                                                                                                                                          |


## Events

| Event                         | Description                                                                                               | Type                        |
| ----------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------- |
| `ldchoosefiles`               | Emitted after choosing files.                                                                             | `CustomEvent<UploadItem[]>` |
| `ldfileuploadcontinueuploads` | Emitted on continue all uploads click.                                                                    | `CustomEvent<UploadItem[]>` |
| `ldfileuploaddeleteall`       | Emitted on delete all files click.                                                                        | `CustomEvent<UploadItem[]>` |
| `ldfileuploadpausealluploads` | Emitted on pause all uploads click.                                                                       | `CustomEvent<UploadItem[]>` |
| `ldfileuploadready`           | Emitted on start upload click or after choosing files, if upload starts immediately after choosing files. | `CustomEvent<UploadItem[]>` |


## Methods

### `addUploadItems(uploadItems: UploadItem[]) => Promise<void>`

Accepts a file list from component consumer (name, progress, state etc.)
and adds the items to the upload items state.

#### Returns

Type: `Promise<void>`



### `deleteAllUploadItems() => Promise<void>`

Accepts a file list from component consumer (name, progress, state etc.)
and deletes the upload items.

#### Returns

Type: `Promise<void>`



### `deleteUploadItem(uploadItem: UploadItem) => Promise<void>`

Accepts a file from component consumer (name, progress, state etc.)
and deletes the upload items.

#### Returns

Type: `Promise<void>`



### `updateUploadItem(uploadItem: UploadItem) => Promise<void>`

Accepts a file from component consumer (name, progress, state etc.)
and updates the upload item state.

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [ld-choose-file](ld-choose-file)
- [ld-notice](../ld-notice)
- [ld-sr-only](../ld-sr-only)
- [ld-circular-progress](../ld-circular-progress)
- [ld-typo](../ld-typo)
- [ld-input-message](../ld-input-message)
- [ld-upload-progress](ld-upload-progress)
- [ld-button](../ld-button)

### Graph
```mermaid
graph TD;
  ld-file-upload --> ld-choose-file
  ld-file-upload --> ld-notice
  ld-file-upload --> ld-sr-only
  ld-file-upload --> ld-circular-progress
  ld-file-upload --> ld-typo
  ld-file-upload --> ld-input-message
  ld-file-upload --> ld-upload-progress
  ld-file-upload --> ld-button
  ld-choose-file --> ld-typo
  ld-choose-file --> ld-button
  ld-notice --> ld-icon
  ld-notice --> ld-typo
  ld-input-message --> ld-icon
  ld-upload-progress --> ld-upload-item
  ld-upload-item --> ld-icon
  ld-upload-item --> ld-typo
  ld-upload-item --> ld-button
  ld-upload-item --> ld-sr-only
  ld-upload-item --> ld-progress
  ld-upload-item --> ld-input-message
  style ld-file-upload fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*