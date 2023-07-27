import * as React from 'react'

import { DialogFooter, DialogContent, Dialog } from '../dialog'
import { OkCancelButtonGroup } from '../dialog/ok-cancel-button-group'
import { relaunchApp } from '../main-process-proxy'

export class ConfirmRestart extends React.Component {
  public render() {
    return (
      <Dialog
        title="Are you sure you want to force push?"
        dismissable={true}
        onSubmit={relaunchApp}
        type="warning"
      >
        <DialogContent>
          <p>Restart GitHub Desktop to apply the change.</p>
        </DialogContent>
        <DialogFooter>
          <OkCancelButtonGroup destructive={true} okButtonText="I'm sure" />
        </DialogFooter>
      </Dialog>
    )
  }
}
