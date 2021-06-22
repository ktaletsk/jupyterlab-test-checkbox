import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { InputDialog } from '@jupyterlab/apputils'

/**
 * Initialization data for the test-checkbox extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'test-checkbox:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    InputDialog.getBoolean({ title: 'Check or not?' }).then(value => {
      console.log('boolean ' + value.value);
    });

    console.log('JupyterLab extension test-checkbox is activated!');
  }
};

export default plugin;
