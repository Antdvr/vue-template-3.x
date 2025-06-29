import { promiser, resolver, worker, rester } from '@/mock/setup'
import { http, HttpResponse } from 'msw'

const tag = '查询 Tree 下拉框'
const url = resolver('/base/getTreeById')

worker.use(
  http.post(url, async req => {
    const body = await rester.body(req)
    const query = await rester.query(req)
    const params = await rester.params(req)
    const printer = await rester.printer(tag)

    let resource: any = null

    switch (body && body.id) {
      case 'orgTree': {
        resource = {
          code: '0000',
          message: null,
          result: [
            {
              label: '杰耘投资集团有限公司',
              shortName: '杰耘集团',
              value: '1',
              valueParent: '0',
              children: [
                {
                  label: '杰耘投资发展有限公司',
                  shortName: '杰耘母公司',
                  value: '101.100',
                  valueParent: '1',
                  children: [
                    {
                      label: '杰耘网盾平台',
                      shortName: '杰耘网盾',
                      value: '101.100.131',
                      valueParent: '101.100',
                    },
                    {
                      label: '杰耘采购平台',
                      shortName: '杰耘采购',
                      value: '101.100.138',
                      valueParent: '101.100',
                    },
                  ],
                },
              ],
            },
          ],
        }
        break
      }
      default: {
        resource = {
          code: '0000',
          message: null,
          result: [],
        }
      }
    }

    printer(log => {
      log('[body] - ', body)
      log('[query] - ', query)
      log('[params] - ', params)
      log('[resource] - ', resource)
    })

    return promiser(
      HttpResponse.json(resource),
      0,
    )
  }),
)
