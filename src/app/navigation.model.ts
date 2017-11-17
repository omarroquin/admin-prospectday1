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
                        'url'  : '/stages',
                        'badge': {
                            'title': 25,
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    }
                ]
            }
        ];
    }
}
