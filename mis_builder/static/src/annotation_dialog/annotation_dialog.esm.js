import {Component, signal, t, useProps} from "@odoo/owl";
import {Dialog} from "@web/core/dialog/dialog";

export class AnnotationDialog extends Component {
  static components = {Dialog};
  static template = "mis_builder.AnnotationDialog";
  props = useProps({
    close: t.function(),
    annotationText: t.string(),
    confirm: t.function(),
    title: t.string(),
    remove: t.function(),
    canRemove: t.boolean(),
  });

  setup() {
    this.annotationText = signal(this.props.annotationText);
  }

  confirm() {
    this.props.confirm(this.annotationText());
    this.props.close();
  }

  remove() {
    this.props.remove();
    this.props.close();
  }
}
