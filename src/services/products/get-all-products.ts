import type { ApiContext, Product } from '@/types'
import { fetcher } from '@/utils'

/**
 * プロダクトAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns 商品一覧
 */
const getAllProducts = async (context: ApiContext): Promise<Product[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/products`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getAllProducts
