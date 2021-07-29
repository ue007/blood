let data = [
    {
        id: 1,
        name: 'umi',
        desc: '极快的类 Next.js 的 React 应用框架。',
        url: 'https://umijs.org'
    },
    {
        id: 2,
        name: 'antd',
        desc: '一个服务于企业级产品的设计体系。',
        url: 'https://ant.design/index-cn'
    },
    {
        id: 3,
        name: 'antd-pro',
        desc: '一个服务于企业级产品的设计体系。',
        url: 'https://ant.design/index-cn'
    }
];

export default {
    'get /api/cards': function (req: any, res: { json: (arg0: { result: { id: number; name: string; desc: string; url: string; }[]; }) => void; }, next: any) {
        setTimeout(() => {
            res.json({
                result: data,
            })
        }, 250)
    },
    'delete /api/cards/:id': function (req: { params: { id: string; }; }, res: { json: (arg0: { success: boolean; }) => void; }, next: any) {
        data = data.filter(v => v.id !== parseInt(req.params.id));
        console.log(req.params.id);
        console.log(data);
        setTimeout(() => {
            res.json({
                success: true,
            })
        }, 250)
    },
    'post /api/cards/add': function (req: { body: { id: number; name: string; desc: string; url: string; }; }, res: { json: (arg0: { success: boolean; }) => void; }, next: any) {
        data = [...data, {
            ...req.body,
            id: data[data.length - 1].id + 1,
        }];

        res.json({
            success: true,
        });
    },
    'get /api/cards/:id/statistic': function (req: any, res: { json: (arg0: { result: { genre: string; sold: number; }[]; }) => void; }, next: any) {
        res.json({
            result: [
                { genre: 'Sports', sold: 275 },
                { genre: 'Strategy', sold: 1150 },
                { genre: 'Action', sold: 120 },
                { genre: 'Shooter', sold: 350 },
                { genre: 'Other', sold: 150 },
            ]
        });
    },
}
