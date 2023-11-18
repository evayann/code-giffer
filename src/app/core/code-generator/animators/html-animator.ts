import { CodeAnimator } from "./code-animator";

type Tag = { name: string, attributeList: Attribute[] };
type Attribute = { name: string, value: string };

export class HtmlAnimator extends CodeAnimator {
  static parse(htmlCode: string): HtmlAnimator {
    const root = HtmlAnimator.createRoot(htmlCode);
    const splittedCodeList = Array.from(root.children).forEach(child => this.node(child));
    const animator = new HtmlAnimator();

    return animator;
  }

  private static createRoot(htmlCode: string): HTMLDivElement {
    const root = document.createElement('div');
    root.innerHTML = htmlCode;
    return root;
  }

  private static node(node: Element): void {
    const tagName = node.tagName;
    const attributeList = Array.from(node.attributes);

    // attributeList.forEach((attribute: any) => console.log(attribute.name, attribute.value));
    // console.log(node.hasChildNodes(), node, node.children)
    if (!node.hasChildNodes()) return;
    Array.from(node.children).forEach(child => HtmlAnimator.node(child));
  }

  private static tag({ name, attributeList }: Tag): string[] {
    const generateListForAttribute = ({ name, value }: Attribute): string[] => {
      const setAttributeValue = (value: string) => `${name}="${value}"`;

      return attributeList.flatMap(({ name, value }) => [

        ...[...value].map((character, index) => setAttributeValue(`${value.slice(0, index)}${character}`))
      ]);
    };

    return [
      '<',
      `<${name}`,
      `<${name}></${name}`,
      `<${name}> </${name}`,
      `<${name}>  </${name}`,
      ...attributeList.flatMap(generateListForAttribute)
    ]
  }
}
