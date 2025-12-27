<template>
  <div class="space-y-8">
    <h1 class="text-4xl font-heading mb-8">Component Gallery</h1>

    <section class="space-y-4">
      <h2 class="text-3xl font-heading">Buttons</h2>
      <div class="flex flex-wrap gap-4">
        <Button>Default</Button>
        <Button variant="neutral">Neutral</Button>
        <Button variant="noShadow">No Shadow</Button>
        <Button variant="reverse">Reverse</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-3xl font-heading">Cards</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the card content with some example text.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Another Card</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge>New</Badge>
            <p class="mt-2">Cards are versatile containers for content.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>With Avatar</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p class="font-heading">John Doe</p>
                <p class="text-sm">Designer</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-3xl font-heading">Alerts</h2>
      <Alert>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert with important information.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>This indicates an error or warning.</AlertDescription>
      </Alert>
    </section>

    <section class="space-y-4">
      <h2 class="text-3xl font-heading">Form Controls</h2>
      <div class="space-y-4 max-w-md">
        <div class="space-y-2">
          <Label for="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>

        <div class="space-y-2">
          <Label for="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label for="terms">I accept the terms and conditions</Label>
        </div>

        <div class="flex items-center gap-2">
          <Switch id="notifications" />
          <Label for="notifications">Enable notifications</Label>
        </div>

        <div class="space-y-2">
          <Label>Volume</Label>
          <Slider :default-value="[50]" :max="100" :step="1" />
        </div>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-3xl font-heading">Badges & Avatars</h2>
      <div class="flex flex-wrap gap-4 items-center">
        <Badge>Default</Badge>
        <Badge variant="neutral">Neutral</Badge>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-3xl font-heading">Progress & Skeleton</h2>
      <Progress :value="66" class="w-full max-w-md" />
      <div class="space-y-2 max-w-md">
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-3/4" />
        <Skeleton class="h-4 w-1/2" />
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-3xl font-heading">Table</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alice Johnson</TableCell>
            <TableCell><Badge>Active</Badge></TableCell>
            <TableCell>Developer</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Smith</TableCell>
            <TableCell><Badge>Active</Badge></TableCell>
            <TableCell>Designer</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Carol White</TableCell>
            <TableCell><Badge variant="neutral">Inactive</Badge></TableCell>
            <TableCell>Manager</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>

    <section class="space-y-4">
      <h2 class="text-3xl font-heading">Accordion</h2>
      <Accordion type="single" collapsible class="max-w-2xl">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is neobrutalism?</AccordionTrigger>
          <AccordionContent>
            Neobrutalism is a design trend characterized by bold typography, thick borders, 
            high contrast colors, and flat shadows. It draws inspiration from brutalist architecture.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I install these components?</AccordionTrigger>
          <AccordionContent>
            Clone the repository and copy the components you need into your Vue 3 project. 
            Make sure to install the required dependencies like radix-vue and tailwindcss.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I customize the colors?</AccordionTrigger>
          <AccordionContent>
            Yes! The design system uses CSS variables that you can customize in globals.css. 
            Change the --main color and other variables to match your brand.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <section class="space-y-4">
      <h2 class="text-3xl font-heading">Tabs</h2>
      <Tabs default-value="account" class="max-w-2xl">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account" class="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Manage your account details here</CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              <div class="space-y-1">
                <Label for="username">Username</Label>
                <Input id="username" placeholder="username" />
              </div>
              <div class="space-y-1">
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password here</CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              <Input type="password" placeholder="Current password" />
              <Input type="password" placeholder="New password" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Settings content would go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  </div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardDescription from '@/components/ui/CardDescription.vue'
import CardContent from '@/components/ui/CardContent.vue'
import CardFooter from '@/components/ui/CardFooter.vue'
import Alert from '@/components/ui/Alert.vue'
import AlertTitle from '@/components/ui/AlertTitle.vue'
import AlertDescription from '@/components/ui/AlertDescription.vue'
import Badge from '@/components/ui/Badge.vue'
import Avatar from '@/components/ui/Avatar.vue'
import AvatarFallback from '@/components/ui/AvatarFallback.vue'
import Input from '@/components/ui/Input.vue'
import Textarea from '@/components/ui/Textarea.vue'
import Label from '@/components/ui/Label.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Switch from '@/components/ui/Switch.vue'
import Slider from '@/components/ui/Slider.vue'
import Progress from '@/components/ui/Progress.vue'
import Skeleton from '@/components/ui/Skeleton.vue'
import Table from '@/components/ui/Table.vue'
import TableHeader from '@/components/ui/TableHeader.vue'
import TableBody from '@/components/ui/TableBody.vue'
import TableRow from '@/components/ui/TableRow.vue'
import TableHead from '@/components/ui/TableHead.vue'
import TableCell from '@/components/ui/TableCell.vue'
import Accordion from '@/components/ui/Accordion.vue'
import AccordionItem from '@/components/ui/AccordionItem.vue'
import AccordionTrigger from '@/components/ui/AccordionTrigger.vue'
import AccordionContent from '@/components/ui/AccordionContent.vue'
import Tabs from '@/components/ui/Tabs.vue'
import TabsList from '@/components/ui/TabsList.vue'
import TabsTrigger from '@/components/ui/TabsTrigger.vue'
import TabsContent from '@/components/ui/TabsContent.vue'
</script>
