import { Separator } from "@/components/ui/separator";
import { AccountForm } from "@/app/user-settings/account/account-form";

export default function DomainsSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Webhooks</h3>
        <p className="text-sm text-muted-foreground">
          Update your webhook settings. crreate a new wedhook, check
          notifocation events and logs
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}
