import { ApiContext, User } from '@/types'
import { fetcher } from '@/utils'

export type GetUserParams = {
  id: number
}

/**
 * ユーザーAPI（個別取得）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザー
 */
const getUser = async (
  context: ApiContext,
  param: GetUserParams,
): Promise<User> => {
  /**
  // ユーザーAPI
  // サンプルレスポンス
  {
    "id": "1",
    "username": "taketo",
    "displayName": "Taketo Yoshida",
    "email": "taketo@example.com",
    "profileImageUrl": "/users/1.png",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  }
   */
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${param.id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getUser