import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
export declare const TheiaHelloWorldExtensionCommand: {
    id: string;
    label: string;
};
export declare class TheiaHelloWorldExtensionCommandContribution implements CommandContribution {
    private readonly messageService;
    constructor(messageService: MessageService);
    registerCommands(registry: CommandRegistry): void;
}
export declare class TheiaHelloWorldExtensionMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=theia-hello-world-extension-contribution.d.ts.map