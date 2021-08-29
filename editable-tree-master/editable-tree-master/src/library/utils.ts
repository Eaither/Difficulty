import { ILeafNode } from '../type/type'

export const isNotEmptyArray = <T = any>(data: Array<T>) =>
  data && Array.isArray(data) && data.length > 0

export const translateDataToTree = <T extends ILeafNode>(
  data: Array<T>
): Array<T> => {
  const parents = data.filter((item: T) => !item.parentId)

  const children = data.filter((item: T) => item.parentId > 0)
  console.log(parents,5)
  console.log(children,5)
  const translator = (parents: Array<T>, children: Array<T>) => {
    parents.forEach((parent) => {
      children.forEach((child, index) => {
        if (child.parentId === parent.id) {
          const temp = JSON.parse(JSON.stringify(children))
          temp.splice(index, 1)
          console.log(temp.splice(index, 1), 19)
          translator([child], temp)
          isNotEmptyArray(parent.children)
            ? parent.children.push(child)
            : (parent.children = [child])
        }
      })
    })
  }
  translator(parents, children)
  return parents
}
