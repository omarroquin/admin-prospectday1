export class NavigationModel
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'title': 'Applications',
                'type' : 'group',
                'children': [
                    {
                        'title': 'Stages',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/stages'
                    },
                    {
                        'title': 'Users',
                        'type' : 'item',
                        'icon' : 'person',
                        'url'  : '/users'
                    }
                ]
            }
        ];
    }
}
